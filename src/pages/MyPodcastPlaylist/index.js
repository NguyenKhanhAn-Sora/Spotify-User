import styles from './MyPodcastPlaylist.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function MyPodcastPlaylist() {
    const cx = classNames.bind(styles);

    const podcastList = [
        {
            id: 1,
            title: 'Podcast Title 1',
            artist: 'Podcast Artist 1',
            description: 'Podcast Description 1',
            dateAdded: 'Mar 20, 2025',
            duration: '20 min 17 sec',
        },
        {
            id: 1,
            title: 'Podcast Title 1',
            artist: 'Podcast Artist 1',
            description: 'Podcast Description 1',
            dateAdded: 'Mar 20, 2025',
            duration: '20 min 17 sec',
        },
        {
            id: 1,
            title: 'Podcast Title 1',
            artist: 'Podcast Artist 1',
            description: 'Podcast Description 1',
            dateAdded: 'Mar 20, 2025',
            duration: '20 min 17 sec',
        },
        {
            id: 1,
            title: 'Podcast Title 1',
            artist: 'Podcast Artist 1',
            description: 'Podcast Description 1',
            dateAdded: 'Mar 20, 2025',
            duration: '20 min 17 sec',
        },
        {
            id: 1,
            title: 'Podcast Title 1',
            artist: 'Podcast Artist 1',
            description: 'Podcast Description 1',
            dateAdded: 'Mar 20, 2025',
            duration: '20 min 17 sec',
        },
    ];

    const inputFillRef = useRef();
    const inputEnterRef = useRef();
    const [labelName, setLabelName] = useState(false);
    const [labelDesc, setLabelDesc] = useState(false);

    // Set Event When User Keydown "Enter" In Description - Edit Modal
    const handleKeyDownEnter = (e) => {
        // Kiểm tra nếu phím người dùng nhấn là Enter (keyCode 13)
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn hành động mặc định (thêm dòng mới)
            inputEnterRef.current.style.display = 'block';
            inputFillRef.current.style.display = 'none';
        }
    };

    // Set Event OnClick "Save" Button In Edit Modal

    const handleOnClickSubmitEdit = (e) => {
        if (playlistName === '' || playlistDesc === '') {
            e.preventDefault();
            inputFillRef.current.style.display = 'block';
        }
    };

    const [showEditModal, setShowEditModal] = useState(false); // Set Show Edit Modal

    const [playlistName, setPlaylistName] = useState(''); //Playlist Name
    const [playlistDesc, setPlaylistDesc] = useState(''); //Playlist Description
    const [playlistImage, setPlaylistImage] = useState(null); //Playlist Image

    // Preview Image Playlist
    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        console.log(file);
        setPlaylistImage(file);
    };

    return (
        <div className={cx('podcast-playlist-root')}>
            <content>
                <div className={cx('podcast-playlist-wrapper')}>
                    <div className={cx('podcast-playlist-container')}>
                        <div className={cx('podcast-playlist-header')}>
                            <div className={cx('header--background-color')}></div>
                            <div className={cx('header--background')}></div>
                            <div
                                className={cx('header--content')}
                                onClick={() => {
                                    setShowEditModal(!showEditModal);
                                }}
                            >
                                <div className={cx('playlist-image-wrapper')}>
                                    <div className={cx('playlist-image')}>
                                        <img src={LifeImg} alt="" />
                                    </div>
                                </div>
                                <div className={cx('playlist-info')}>
                                    <span className={cx('playlist-title')}>Playlist</span>
                                    <span className={cx('playlist-name')}>
                                        <h1>Playlist Name</h1>
                                    </span>
                                    <span className={cx('playlist-desc')}>Playlist Description</span>
                                    <div className={cx('playlist-analysis')}>
                                        <div className={cx('playlist-user-avatar')}>
                                            <div className={cx('playlist-user-avatar-wrapper')}>
                                                <img src={LifeImg} alt="" />
                                            </div>
                                            <span className={cx('user-name')}>User Name</span>
                                        </div>
                                        <div className={cx('playlist-analysis-detail')}>
                                            <span className={cx('playlist-count-song')}>
                                                <span>?</span> episodes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {showEditModal && (
                                <div className={cx('modal-edit-playlist', 'modal')}>
                                    <div className={cx('modal-edit-playlist-wrapper', 'modal-wrapper')}>
                                        <div className={cx('modal-edit-playlist-content', 'modal-content')}>
                                            <div className={cx('modal-edit-playlist-header')}>
                                                <h3>Edit Details</h3>
                                                <button
                                                    className={cx('btn-close-edit-modal')}
                                                    onClick={() => {
                                                        setShowEditModal(!showEditModal);
                                                    }}
                                                >
                                                    <span>
                                                        <svg
                                                            data-encore-id="icon"
                                                            role="img"
                                                            aria-label="Close"
                                                            aria-hidden="false"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                            <div class={cx('alert-error')}>
                                                <div class={cx('keydown-enter')} ref={inputEnterRef}>
                                                    <p
                                                        class="e-9800-text encore-text-marginal sz8Nwj2lvhOZxDwYWRQr"
                                                        data-encore-id="text"
                                                    >
                                                        <svg
                                                            data-encore-id="icon"
                                                            role="img"
                                                            aria-hidden="true"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                                            <path d="M7.25 9V4h1.5v5h-1.5zm0 3.026v-1.5h1.5v1.5h-1.5z"></path>
                                                        </svg>
                                                        Line breaks aren't supported in the description.
                                                    </p>
                                                </div>
                                                <div class={cx('input-null')} ref={inputFillRef}>
                                                    <p
                                                        class="e-9800-text encore-text-marginal sz8Nwj2lvhOZxDwYWRQr"
                                                        data-encore-id="text"
                                                    >
                                                        <svg
                                                            data-encore-id="icon"
                                                            role="img"
                                                            aria-hidden="true"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                                            <path d="M7.25 9V4h1.5v5h-1.5zm0 3.026v-1.5h1.5v1.5h-1.5z"></path>
                                                        </svg>
                                                        Please fill all infomation!
                                                    </p>
                                                </div>
                                            </div>
                                            <form className={cx('modal-edit-playlist-form')}>
                                                <div className={cx('modal-edit-form-wrapper')}>
                                                    <div className={cx('modal-edit-image')}>
                                                        <div className={cx('modal-edit-image-wrapper')}>
                                                            <div className={cx('image-playlist')}>
                                                                {playlistImage ? (
                                                                    <img src={playlistImage.preview} alt="" />
                                                                ) : (
                                                                    <span className={cx('image-playlist-none')}>
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            data-testid="playlist"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <label
                                                                htmlFor="input-choose-image-playlist"
                                                                className={cx('choose-photo')}
                                                            >
                                                                <span>
                                                                    <svg
                                                                        data-encore-id="icon"
                                                                        role="img"
                                                                        aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className={cx('choose-photo-text')}>
                                                                    Choose Photo
                                                                </span>
                                                            </label>
                                                            <input
                                                                type="file"
                                                                onChange={handlePreviewImage}
                                                                style={{ display: 'none' }}
                                                                id="input-choose-image-playlist"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('modal-edit-info')}>
                                                        <div className={cx('modal-edit-playlist-name')}>
                                                            <label
                                                                htmlFor="playlist-name"
                                                                className={cx(labelName ? 'active' : '')}
                                                            >
                                                                Name
                                                            </label>
                                                            <input
                                                                placeholder="Add a name"
                                                                id="playlist-name"
                                                                value={playlistName}
                                                                onChange={(e) => {
                                                                    setPlaylistName(e.target.value);
                                                                    inputFillRef.current.style.display = 'none';
                                                                }}
                                                                onFocus={() => {
                                                                    setLabelName(true);
                                                                }}
                                                                onBlur={() => {
                                                                    if (playlistName === '') {
                                                                        inputFillRef.current.style.display = 'block';
                                                                        inputEnterRef.current.style.display = 'none';
                                                                    }
                                                                    setLabelName(false);
                                                                }}
                                                            />
                                                        </div>
                                                        <div className={cx('modal-edit-playlist-desc')}>
                                                            <label
                                                                htmlFor="playlist-desc"
                                                                className={cx(labelDesc ? 'active' : '')}
                                                            >
                                                                Description
                                                            </label>
                                                            <textarea
                                                                value={playlistDesc}
                                                                id="playlist-desc"
                                                                placeholder="Add an optional description"
                                                                onChange={(e) => {
                                                                    setPlaylistDesc(e.target.value);
                                                                    inputFillRef.current.style.display = 'none';
                                                                }}
                                                                onFocus={() => {
                                                                    setLabelDesc(true);
                                                                }}
                                                                onKeyDown={handleKeyDownEnter}
                                                                onBlur={() => {
                                                                    if (playlistDesc === '') {
                                                                        inputFillRef.current.style.display = 'block';
                                                                        inputEnterRef.current.style.display = 'none';
                                                                    }
                                                                    setLabelDesc(false);
                                                                }}
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className={cx('btn-save-edit-modal')}
                                                    type="submit"
                                                    onClick={handleOnClickSubmitEdit}
                                                >
                                                    <span>Save</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={cx('podcast-playlist-content')}>
                            <div className={cx('content--background')}></div>
                            <div>
                                <div className={cx('podcast-playlist-content--control')}>
                                    <div className={cx('podcast-playlist-content--control-wrapper')}>
                                        <div className={cx('control--wrapper')}>
                                            <button className={cx('btn-play-playlist')}>
                                                <span>
                                                    <svg
                                                        data-encore-id="icon"
                                                        role="img"
                                                        aria-hidden="true"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <button className={cx('btn-more-option')}>
                                                <span>
                                                    <svg
                                                        data-encore-id="icon"
                                                        role="img"
                                                        aria-hidden="true"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('podcast-list')}>
                                    <div className={cx('playlist-list-wrapper')}>
                                        {podcastList.map((podcastItem, podcastIndex) => (
                                            <div className={cx('podcast-list-item')} key={podcastIndex}>
                                                <Link to="/podcastinfo">
                                                    <div className={cx('podcast-list-item-wrapper')}>
                                                        <div className={cx('podcast-image')}>
                                                            <div className={cx('podcast-image-wrapper')}>
                                                                <img src={LifeImg} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className={cx('podcast-info')}>
                                                            <div className={cx('podcast-info-wrapper')}>
                                                                <div className={cx('podcast-title')}>
                                                                    <h2 className={cx('text-overflow-2-lines')}>
                                                                        Podcast Title
                                                                    </h2>
                                                                </div>
                                                                <div className={cx('podcast-artist')}>
                                                                    <span>Podcast Artist</span>
                                                                </div>
                                                                <div className={cx('podcast-desc')}>
                                                                    <span className={cx('text-overflow-2-lines')}>
                                                                        Podcast Description
                                                                    </span>
                                                                </div>
                                                                <div className={cx('podcast-time')}>
                                                                    <span className={cx('podcast-date-add')}>
                                                                        Mar 20, 2025
                                                                    </span>
                                                                    <span className={cx('podcast-duration')}>
                                                                        20 min 17 sec
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className={cx('podcast-control')}>
                                                                <button className={cx('btn-add-music', 'added')}>
                                                                    <span className={cx('btn-add')}>
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"></path>
                                                                            <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <span className={cx('btn-added')}>
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                                <button className={cx('btn-share-music')}>
                                                                    <span>
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"></path>
                                                                            <path d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                                <button className={cx('btn-more-option')}>
                                                                    <span>
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                                <button className={cx('btn-play-music')}>
                                                                    <span className={cx('btn-will-play')}>
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <span className={cx('btn-will-pause')}>
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </content>
        </div>
    );
}

export default MyPodcastPlaylist;
