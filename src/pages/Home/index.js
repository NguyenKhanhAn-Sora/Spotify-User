import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function Home() {
    const cx = classNames.bind(styles);
    // -------------- Banner --------------
    const bannerItemsRef = useRef([]);
    const bannerLists = ['banner1', 'banner2', 'banner3'];
    const [bannerTransFormValue, setBannerTransFormValue] = useState(0);
    const bannerItemWidth = bannerItemsRef.current[0]?.offsetWidth || 0;

    let interval;

    useEffect(() => {
        interval = setInterval(() => {
            setBannerTransFormValue((prev) => {
                if (prev === bannerLists.length - 1) {
                    return 0; // Nếu đã đến phần tử cuối cùng, quay lại phần tử đầu tiên
                }
                return prev + 1; // Tăng giá trị lên 1 để chuyển sang phần tử tiếp theo
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [bannerTransFormValue]);

    const handleButtonBannerClick = (index) => {
        setBannerTransFormValue(index); // Cập nhật giá trị của bannerTransFormValue khi nhấn nút
        clearInterval(interval); // Dừng interval khi nhấn nút
    };

    // -------------- End Banner --------------

    // -------------- Section List --------------

    const sectionLists = [
        {
            title: 'title 1',
            songs: [
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
            ],
        },
        {
            title: 'title 1',
            songs: [
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
            ],
        },
        {
            title: 'title 1',
            songs: [
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
            ],
        },
        {
            title: 'title 1',
            songs: [
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
            ],
        },
        {
            title: 'title 1',
            songs: [
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
                {
                    name: 'song name',
                    artist: 'song artist',
                },
            ],
        },
    ];

    // -------------- End Section List --------------
    const [selectedSongPlaying, setSelectedSongPlaying] = useState(null);
    const [isHaveMusicPlaying, setIsHaveMusicPlaying] = useState(false);

    const handleOnClickSelectedSong = (sectionIndex, songIndex) => {
        const songId = `${sectionIndex}-${songIndex}`;

        if (songId === selectedSongPlaying) {
            setIsHaveMusicPlaying(!isHaveMusicPlaying);
        } else {
            if (isHaveMusicPlaying == false) {
                setSelectedSongPlaying(songId);
                setIsHaveMusicPlaying(!isHaveMusicPlaying);
            } else {
                setSelectedSongPlaying(songId);
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
    }, [sectionLists]);

    console.log('sectionOffset', sectionOffset);

    // const fetchdata = async () => {
    //     try {
    //         const response = await fetch(
    //             'https://api.spotify.com/v1/tracks?ids=1xac19gEfJKe34YoaINqsk,22F7P7QnaVspdf5rKveBaS,2Emlw3C8Rqn9lAen25OItw,703QXwWn5KdNaoviarYHAO,7LVrrX8pkzI9fMF88nGabt&market=from_token',
    //         );
    //         const data = await response.json();
    //         // const maindata = data.data;
    //         console.log('Fetched data:', data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // fetchdata();

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
                                                    <img src={LifeImg} alt="Music" />
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
                                                    <span className={cx('will-play-icon')}>
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
                                                    <span className={cx('will-pause-icon')}>
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
            </content>
        </div>
    );
}

export default Home;
