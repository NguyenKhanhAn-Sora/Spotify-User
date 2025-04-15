import styles from './MyMusicPlaylist.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { Link } from 'react-router-dom';

function MyMusicPlaylist() {
    const cx = classNames.bind(styles);

    const songList = [
        {
            title: `Song Title`,
            artist: `Artist Name`,
            album: `Album Name`,
            dateAdded: `Date Added`,
            duration: `00:00`,
        },
        {
            title: `Song Title`,
            artist: `Artist Name`,
            album: `Album Name`,
            dateAdded: `Date Added`,
            duration: `00:00`,
        },
        {
            title: `Song Title`,
            artist: `Artist Name`,
            album: `Album Name`,
            dateAdded: `Date Added`,
            duration: `00:00`,
        },
        {
            title: `Song Title`,
            artist: `Artist Name`,
            album: `Album Name`,
            dateAdded: `Date Added`,
            duration: `00:00`,
        },
        {
            title: `Song Title`,
            artist: `Artist Name`,
            album: `Album Name`,
            dateAdded: `Date Added`,
            duration: `00:00`,
        },
        {
            title: `Song Title`,
            artist: `Artist Name`,
            album: `Album Name`,
            dateAdded: `Date Added`,
            duration: `00:00`,
        },
    ];

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



    // Set Event When user Oder Playlist belong "List" or "Compact"
    const filterList = ['List', 'Compact'];
    const [showFilterList, setShowFilterList] = useState(false);
    const [filter, setFilter] = useState('compact');

    const handleOnClickChangeFilter = (filterItem) => {
        if (filterItem !== filter) {
            setFilter(filterItem);
        }
    };


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

    // }

    return (
        <div className={cx('my-music-playlist')}>
            <content>
                <div className={cx('musicpage-wrapper')}>
                    <div className={cx('musicpage-container')}>
                        <div className={cx('musicpage-header')}>
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
                                        <h1>Playlist Song Name</h1>
                                    </span>
                                    <span className={cx('playlist-desc')}>Playlist Description</span>
                                    <div className={cx('playlist-analysis')}>
                                        <div className={cx('user-avata')}>
                                            <div className={cx('user-avata-wrapper')}>
                                                <img src={LifeImg} alt="" />
                                            </div>
                                            <span>User Name</span>
                                        </div>
                                        <span className={cx('playlist-analysis-dot')}>•</span>
                                        <div className={cx('playlist-analysis-detail')}>
                                            <span className={cx('playlist-count-song')}>
                                                <span>50</span> songs
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
                        <div className={cx('musicpage-content')}>
                            <div className={cx('content--background')}></div>
                            <div>
                                <div className={cx('musicpage-content--control')}>
                                    <div className={cx('musicpage-content--control-wrapper')}>
                                        <div className={cx('control--wrapper')}>
                                            <button className={cx('btn-play-music')}>
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
                                            <div className={cx('filter-wrapper')}>
                                                <button
                                                    onClick={() => {
                                                        setShowFilterList(!showFilterList);
                                                    }}
                                                >
                                                    <span>List</span>
                                                    <span className={cx('btn-list-music')}>
                                                        <svg
                                                            data-encore-id="icon"
                                                            role="img"
                                                            aria-hidden="true"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                                {showFilterList && (
                                                    <div className={cx('filter-list')}>
                                                        <div className={cx('filter-list-wrapper')}>
                                                            <div className={cx('filter-list-header')}>
                                                                <span>View as</span>
                                                            </div>
                                                            {filterList.map((filterItem, index) => (
                                                                <button
                                                                    className={cx(
                                                                        'filter-option',
                                                                        filter === filterItem.toLowerCase() && 'active',
                                                                    )}
                                                                    key={index}
                                                                    onClick={() => {
                                                                        handleOnClickChangeFilter(
                                                                            filterItem.toLowerCase(),
                                                                        );
                                                                    }}
                                                                >
                                                                    {filter !== filterItem.toLowerCase() ? (
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z"></path>
                                                                        </svg>
                                                                    ) : (
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                                                                        </svg>
                                                                    )}
                                                                    <span>{filterItem}</span>
                                                                    {filter === filterItem.toLowerCase() && (
                                                                        <svg
                                                                            data-encore-id="icon"
                                                                            role="img"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="M15.53 2.47a.75.75 0 0 1 0 1.06L4.907 14.153.47 9.716a.75.75 0 0 1 1.06-1.06l3.377 3.376L14.47 2.47a.75.75 0 0 1 1.06 0z"></path>
                                                                        </svg>
                                                                    )}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('playlist-list')}>
                                    <div className={cx('playlist-list-wrapper')}>
                                        <div className={cx('playlist-list-content')}>
                                            <div className={cx('playlist-list-header')}>
                                                {filter === 'list' && (
                                                    <div className={cx('playlist-list-header--wrapper', 'list')}>
                                                        <div className={cx('index')}>
                                                            <div>#</div>
                                                        </div>
                                                        <div className={cx('title')}>
                                                            <div>Title</div>
                                                        </div>
                                                        <div className={cx('album')}>
                                                            <div>Album</div>
                                                        </div>
                                                        <div className={cx('date-add')}>
                                                            <div>Date added</div>
                                                        </div>
                                                        <div className={cx('duration')}>
                                                            <div>
                                                                <svg
                                                                    data-encore-id="icon"
                                                                    role="img"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                                                    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {filter === 'compact' && (
                                                    <div className={cx('playlist-list-header--wrapper', 'compact')}>
                                                        <div className={cx('index')}>
                                                            <div>#</div>
                                                        </div>
                                                        <div className={cx('title')}>
                                                            <div>Title</div>
                                                        </div>
                                                        <div className={cx('artist')}>
                                                            <div>Artist</div>
                                                        </div>
                                                        <div className={cx('album')}>
                                                            <div>Album</div>
                                                        </div>
                                                        <div className={cx('date-add')}>
                                                            <div>Date added</div>
                                                        </div>
                                                        <div className={cx('duration')}>
                                                            <div>
                                                                <svg
                                                                    data-encore-id="icon"
                                                                    role="img"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                                                    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {filter === 'list' && (
                                                <div className={cx('playlist-list-table', 'list')}>
                                                    <div className={cx('playlist-item--wrapper')}>
                                                        {songList.map((song, songIndex) => (
                                                            <div className={cx('playlist-item')} key={songIndex}>
                                                                <div className={cx('item-index-wrapper')}>
                                                                    <div className={cx('item-index')}>
                                                                        <div className={cx('item-index-show')}>
                                                                            <span>1</span>
                                                                            <span>
                                                                                <img src="" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className={cx('item-index-hover')}>
                                                                            <button className={cx('btn-play')}>
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
                                                                            <button className={cx('btn-pause')}>
                                                                                <span>
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
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item-info-wrapper')}>
                                                                    <div className={cx('item-info-container')}>
                                                                        <div className={cx('item-image')}>
                                                                            <img src={LifeImg} alt="" />
                                                                        </div>
                                                                        <div className={cx('item-info')}>
                                                                            <span className={cx('item-title')}>
                                                                                Music Title
                                                                            </span>
                                                                            <span className={cx('item-artist')}>
                                                                                Music Artist
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item-album')}>
                                                                    <span>Music Album</span>
                                                                </div>
                                                                <div className={cx('item-date-add')}>
                                                                    <span>Music Date Add</span>
                                                                </div>
                                                                <div className={cx('item-duration')}>
                                                                    <div className={cx('item-duration-wrapper')}>
                                                                        <button className={cx('btn-add-music')}>
                                                                            <span>
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
                                                                        <div className={cx('music-time')}>
                                                                            <span>00:00</span>
                                                                        </div>
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
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {filter === 'compact' && (
                                                <div className={cx('playlist-list-table', 'compact')}>
                                                    <div className={cx('playlist-item--wrapper')}>
                                                        {songList.map((song, songIndex) => (
                                                            <div className={cx('playlist-item')} key={songIndex}>
                                                                <div className={cx('item-index-wrapper')}>
                                                                    <div className={cx('item-index')}>
                                                                        <div className={cx('item-index-show')}>
                                                                            <span>1</span>
                                                                            <span>
                                                                                <img src="" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className={cx('item-index-hover')}>
                                                                            <button className={cx('btn-play')}>
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
                                                                            <button className={cx('btn-pause')}>
                                                                                <span>
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
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item-info-wrapper')}>
                                                                    <div className={cx('item-info-container')}>
                                                                        <div className={cx('item-info')}>
                                                                            <Link to="/songinfo">
                                                                                <span className={cx('item-title')}>
                                                                                    Music Title
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item-artist')}>
                                                                    <span>Music Artist</span>
                                                                </div>
                                                                <div className={cx('item-album')}>
                                                                    <span>Music Album</span>
                                                                </div>
                                                                <div className={cx('item-date-add')}>
                                                                    <span>Music Date Add</span>
                                                                </div>
                                                                <div className={cx('item-duration')}>
                                                                    <div className={cx('item-duration-wrapper')}>
                                                                        <button className={cx('btn-add-music')}>
                                                                            <span>
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
                                                                        <div className={cx('music-time')}>
                                                                            <span>00:00</span>
                                                                        </div>
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
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
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

export default MyMusicPlaylist;
