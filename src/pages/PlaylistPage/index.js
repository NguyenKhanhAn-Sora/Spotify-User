import styles from './PlaylistPage.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { useState, useEffect, useRef } from 'react';

function PlaylistPage() {
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

    const filterList = ['List', 'Compact'];
    const [showFilterList, setShowFilterList] = useState(false);
    const [filter, setFilter] = useState('compact');
    const handleOnClickChangeFilter = (filterItem) => {
        if (filterItem !== filter) {
            setFilter(filterItem);
        }
    };

    // }

    return (
        <div className={cx('playlist-page--root')}>
            <content>
                <div className={cx('musicpage-wrapper')}>
                    <div className={cx('musicpage-container')}>
                        <div className={cx('musicpage-header')}>
                            <div className={cx('header--background-color')}></div>
                            <div className={cx('header--background')}></div>
                            <div className={cx('header--content')}>
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
                                        <div className={cx('playlist-logo-spotify')}>
                                            <div className={cx('playlist-logo-spotify-image')}>
                                                <img src="" alt="" />
                                            </div>
                                            <span>Spotify</span>
                                        </div>
                                        <span className={cx('playlist-analysis-dot')}>•</span>
                                        <div className={cx('playlist-analysis-detail')}>
                                            <span className={cx('playlist-count-song')}>
                                                <span>50</span> songs
                                            </span>
                                            , &nbsp;
                                            <span className={cx('playlist-duration')}>about 3hr</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                            <button className={cx('btn-follow-music')}>
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
                                            <button className={cx('btn-add-music')}>
                                                <span>
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
                                                                                    viewBox="0 0 24 24"
                                                                                >
                                                                                    <path d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"></path>
                                                                                    <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z"></path>
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
                                                                            <span className={cx('item-title')}>
                                                                                Music Title
                                                                            </span>
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
                                                                                    viewBox="0 0 24 24"
                                                                                >
                                                                                    <path d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"></path>
                                                                                    <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z"></path>
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

export default PlaylistPage;
