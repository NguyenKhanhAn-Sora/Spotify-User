import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Howl } from 'howler';
import Popover from '../../components/Popover';

function Home() {
    const cx = classNames.bind(styles);

    // --------------------------- Fetch Data Spotify -----------

    const clientId = '716212da027a4052bcfe4246b2ef3e2e';
    const clientSecret = 'b6acf5a5c31b4441a6b41fb07ef612b8';
    const [spotifyTracks, setSpotifyTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // -------------- Banner --------------
    const bannerItemsRef = useRef([]);
    const bannerLists = ['banner1', 'banner2', 'banner3'];
    const [bannerTransFormValue, setBannerTransFormValue] = useState(0);
    const bannerItemWidth = bannerItemsRef.current[0]?.offsetWidth || 0;

    let interval;

    // useEffect(() => {
    //     interval = setInterval(() => {
    //         setBannerTransFormValue((prev) => {
    //             if (prev === bannerLists.length - 1) {
    //                 return 0; // Nếu đã đến phần tử cuối cùng, quay lại phần tử đầu tiên
    //             }
    //             return prev + 1; // Tăng giá trị lên 1 để chuyển sang phần tử tiếp theo
    //         });
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    const handleButtonBannerClick = (index) => {
        setBannerTransFormValue(index);
        clearInterval(interval);
    };

    // -------------- End Banner --------------

    // -------------- Section List --------------

    const sectionLists = [
        {
            title: 'Popular Tracks from Spotify',
            songs:
                spotifyTracks.length > 0
                    ? spotifyTracks
                    : [
                          {
                              name: 'Loading tracks...',
                              artist: 'Please wait',
                              image: 'https://m.media-amazon.com/images/I/71mgpWBEXHL.jpg',
                              preview_url: null,
                          },
                      ],
        },
    ];

    const soundRef = useRef(null);

    const handleGetSound = (e) => {
        const file = e.target.files[0];
        file.audio = URL.createObjectURL(file);
        soundRef.current = new Howl({
            src: [file.audio],
            format: ['mp3'],
        });
    };

    const [playing, setPlaying] = useState(false);

    const [currentTime, setCurrentTime] = useState(0);

    const handleClickPlay = () => {
        if (soundRef.current) {
            if (playing == false) {
                soundRef.current.seek(currentTime);
                soundRef.current.play();
                setPlaying(!playing);
            } else {
                setCurrentTime(soundRef.current.seek());
                soundRef.current.stop();
                setPlaying(!playing);
            }
        }
    };

    // -------------- End Section List --------------
    const [selectedSongPlaying, setSelectedSongPlaying] = useState(null);
    const [isHaveMusicPlaying, setIsHaveMusicPlaying] = useState(false);

    // Load Spotify tracks when component mounts
    useEffect(() => {
        fetchTrack();
    }, []);

    const handleOnClickSelectedSong = (sectionIndex, songIndex) => {
        const songId = `${sectionIndex}-${songIndex}`;

        if (songId === selectedSongPlaying) {
            setIsHaveMusicPlaying(!isHaveMusicPlaying);

            // Toggle play/pause for the current track
            if (soundRef.current) {
                if (isHaveMusicPlaying) {
                    soundRef.current.pause();
                } else {
                    soundRef.current.play();
                }
            }
        } else {
            // Play new track
            if (sectionIndex === 0) {
                // For Spotify tracks section
                const track = sectionLists[0].songs[songIndex];
                if (track.preview_url) {
                    playSpotifyPreview(track.preview_url);
                    setSelectedSongPlaying(songId);
                    setIsHaveMusicPlaying(true);
                } else {
                    console.error('No preview available for this track');
                }
            } else {
                // Previous logic for non-Spotify tracks
                if (isHaveMusicPlaying == false) {
                    setSelectedSongPlaying(songId);
                    setIsHaveMusicPlaying(!isHaveMusicPlaying);
                } else {
                    setSelectedSongPlaying(songId);
                }
            }
        }
    };

    // ----------------- Section Slide ------------------

    const [activeSectionScroll, setactiveSectionScroll] = useState([]);
    const sectionItemListRefs = useRef([]);
    const songItemRefs = useRef([]);

    const [songItemWidth, setSongItemWidth] = useState(0);
    const [sectionItemListWidth, setSectionItemListWidth] = useState(0);
    const [sectionOffset, setSectionOffset] = useState([]);

    const calculateContainerWidth = () => {
        const containerEl = sectionItemListRefs.current[0];
        const songItemEl = songItemRefs.current[0];
        if (containerEl && songItemEl) {
            const containerWidth = containerEl.offsetWidth;
            const songItemWidth = songItemEl.offsetWidth;
            setSongItemWidth(songItemWidth);
            setSectionItemListWidth(containerWidth);
        }
    };

    const handleNextSectionScroll = (sectionIndex) => {
        const totalWidth = sectionLists[sectionIndex].songs.length * songItemWidth;
        const currentOffset = sectionOffset[sectionIndex] || 0;

        if (currentOffset + sectionItemListWidth < totalWidth) {
            setSectionOffset((prev) => ({
                ...prev,
                [sectionIndex]: currentOffset + sectionItemListWidth,
            }));
        }
    };

    const handlePrevSectionScroll = (sectionIndex) => {
        const currentOffset = sectionOffset[sectionIndex] || 0;
        if (currentOffset > 0) {
            setSectionOffset((prev) => ({
                ...prev,
                [sectionIndex]: currentOffset - sectionItemListWidth,
            }));
        }
    };

    useEffect(() => {
        // Tính toán chiều rộng container khi render lần đầu
        calculateContainerWidth();

        // Thêm event listener để tính toán khi cửa sổ thay đổi kích thước
        window.addEventListener('resize', calculateContainerWidth());

        return () => {
            window.removeEventListener('resize', calculateContainerWidth());
        };
    }, []);
    console.log('sectionOffset', sectionOffset);

    // --------------------------- Fetch Data Spotify -----------

    async function getAccessToken() {
        const tokenUrl = 'https://accounts.spotify.com/api/token';

        // Encode Client ID và Client Secret theo chuẩn base64
        const basicAuth = btoa(clientId + ':' + clientSecret);

        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + basicAuth,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials',
        });

        if (!response.ok) {
            console.error('Failed to get Access Token');
            return;
        }

        const data = await response.json();
        const accessToken = data.access_token;
        console.log('Access Token:', accessToken);

        return accessToken;
    }

    async function fetchTrack() {
        setIsLoading(true);
        try {
            const access_token = await getAccessToken();
            if (!access_token) {
                console.error('No Access Token found');
                return;
            }
            // Fetch a few popular tracks instead of just one
            const trackIds = ['11dFghVXANMlKmJXsNCbNl', '5LS1eMPXmBaK5g06GvZA3o', '1zi7xx7UVEFkmKfv06H8x0'];
            const fetchPromises = trackIds.map((id) =>
                fetch(`https://api.spotify.com/v1/tracks/${id}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                }).then((res) => res.json()),
            );

            const tracksData = await Promise.all(fetchPromises);
            console.log('Tracks Data:', tracksData);

            // Process tracks to use in our app
            const processedTracks = tracksData.map((track) => ({
                id: track.id,
                name: track.name,
                artist: track.artists.map((artist) => artist.name).join(', '),
                image: track.album.images[0]?.url,
                preview_url: track.preview_url,
                duration_ms: track.duration_ms,
            }));

            setSpotifyTracks(processedTracks);
        } catch (error) {
            console.error('Error fetching tracks:', error);
        } finally {
            setIsLoading(false);
        }
    }

    // Function to play a Spotify preview
    const playSpotifyPreview = (previewUrl) => {
        if (!previewUrl) {
            console.error('No preview URL available for this track');
            return;
        }

        if (soundRef.current) {
            soundRef.current.stop(); // Stop any currently playing sound
        }

        // Create a new Howl instance with the preview URL
        soundRef.current = new Howl({
            src: [previewUrl],
            format: ['mp3'],
            html5: true, // Use HTML5 Audio to stream (better for streaming from URLs)
            onplay: () => setPlaying(true),
            onend: () => setPlaying(false),
            onstop: () => setPlaying(false),
            onpause: () => setPlaying(false),
        });

        soundRef.current.play();
    };

    return (
        <div className={cx('home--root')}>
            <content>
                <div className={cx('banner--main')}>
                    <div
                        className={cx('banner-wrapper-list')}
                        style={{
                            transform: `translateX(-${bannerTransFormValue * bannerItemWidth}px)`, // Áp dụng transform vào div
                        }}
                    >
                        {bannerLists.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (bannerItemsRef.current[index] = el)}
                                className={cx('banner-wrapper-item')}
                            >
                                <div className={cx('card')}>
                                    <div className={cx('card-image')}>
                                        <img
                                            src="https://img4.thuthuatphanmem.vn/uploads/2020/05/13/anh-nen-4k-anime_062606240.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('card-desc')}>
                                        <div className={cx('card-info')}>
                                            <span className={cx('card-info-name')}>Music Playlist Name</span>
                                            <span className={cx('card-info-artist')}>Music Playlist Artist Name</span>
                                        </div>
                                        <div className={cx('card-control')}>
                                            <button className={cx('btn-control-menu', 'btn-hover-scale-1-1')}>
                                                <span>
                                                    <svg
                                                        data-encore-id="icon"
                                                        role="img"
                                                        aria-hidden="true"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <button className={cx('btn-control-follow', 'btn-hover-scale-1-1')}>
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                            <button
                                                className={cx('btn-control-play', 'btn-play', 'btn-hover-scale-1-1')}
                                            >
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('banner-nav')}>
                        {bannerLists.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    handleButtonBannerClick(index);
                                }}
                                className={
                                    index === bannerTransFormValue
                                        ? cx('btn-banner-nav', 'active')
                                        : cx('btn-banner-nav')
                                }
                            >
                                <span></span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className={cx('home-section-wrapper')}>
                    {sectionLists.map((item, sectionIndex) => (
                        <section key={sectionIndex} className={cx('home-section-item')}>
                            <div className={cx('section-item-header')}>
                                <div className={cx('section-item-title')}>
                                    <span>{item.title}</span>
                                </div>
                                <button className={cx('btn-see-all')}>
                                    <span>See All</span>
                                </button>
                            </div>
                            <div
                                className={cx(
                                    'home-section-list-wrapper',
                                    sectionOffset.includes(sectionIndex) && 'active',
                                )}
                            >
                                <button
                                    className={cx('btn-prev')}
                                    onClick={() => handlePrevSectionScroll(sectionIndex)}
                                    disabled={(sectionOffset[sectionIndex] || 0) === 0}
                                >
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={cx('section-item-list')}
                                    ref={(el) => (sectionItemListRefs.current[sectionIndex] = el)}
                                >
                                    {item.songs.map((song, songIndex) => {
                                        const songId = `${sectionIndex}-${songIndex}`;
                                        return (
                                            <div
                                                className={
                                                    selectedSongPlaying === songId && isHaveMusicPlaying === true
                                                        ? cx('section-item-list--item', 'playing')
                                                        : cx('section-item-list--item')
                                                }
                                                key={songIndex}
                                                ref={(el) => (songItemRefs.current[songId] = el)}
                                            >
                                                <div className={cx('item-wrapper-image')}>
                                                    <img src={song.image} alt="Music" />
                                                </div>
                                                <div className={cx('item-wrapper-info')}>
                                                    <div className={cx('item-wrapper-name')}>{song.name}</div>
                                                    <div className={cx('item-wrapper-artist')}>{song.artist}</div>
                                                </div>
                                                <button
                                                    className={cx('btn-play', 'btn-hover-scale-1-1')}
                                                    onClick={() => {
                                                        handleOnClickSelectedSong(sectionIndex, songIndex);
                                                    }}
                                                >
                                                    <span className={cx('will-play-icon')} onClick={handleClickPlay}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className={cx('will-pause-icon')} onClick={handleClickPlay}>
                                                        <svg
                                                            data-encore-id="icon"
                                                            role="img"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                                <button
                                    className={cx('btn-next')}
                                    onClick={() => handleNextSectionScroll(sectionIndex)}
                                    disabled={
                                        (sectionOffset[sectionIndex] || 0) + sectionItemListWidth >=
                                        item.songs.length * songItemWidth
                                    }
                                >
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                            <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </section>
                    ))}
                </div>
                <input type="file" onChange={handleGetSound} accept="audio/mp3" />
                <Popover />
            </content>
        </div>
    );
}

export default Home;
