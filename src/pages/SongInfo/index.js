import styles from './SongInfo.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SongInfo() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('song-info-root')}>
            <content>
                <div className={cx('song-info-wrapper')}>
                    <div className={cx('song-info-container')}>
                        <div className={cx('song-info-header')}>
                            <div className={cx('header--background-color')}></div>
                            <div className={cx('header--background')}></div>
                            <div className={cx('header--content')}>
                                <div className={cx('song-image-wrapper')}>
                                    <div className={cx('song-image')}>
                                        <img src={LifeImg} alt="" />
                                    </div>
                                </div>
                                <div className={cx('song-info')}>
                                    <span className={cx('song-title')}>Song</span>
                                    <span className={cx('song-name', 'text-overflow-2-lines')}>
                                        <h1>Song Name</h1>
                                    </span>
                                    <div className={cx('song-detail')}>
                                        <div className={cx('song-image')}>
                                            <img src={LifeImg} alt="" />
                                        </div>
                                        <span className={cx('song-artist')}>Artist Name</span>
                                        <span className={cx('song-album')}>Song Album</span>
                                        <span className={cx('song-date-add')}>Mar 20, 2025</span>
                                        <span className={cx('song-duration')}>00:00</span>
                                        <span className={cx('song-listened')}>900,541</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('song-info-content')}>
                            <div className={cx('content--background')}></div>
                            <div>
                                <div className={cx('song-info-content--control')}>
                                    <div className={cx('song-info-content--control-wrapper')}>
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
                                <section className={cx('song-desc')}>
                                    <div className={cx('song-desc-wrapper')}>
                                        <div className={cx('song-desc-item')}>
                                            <div className={cx('song-desc-item-wrapper')}>
                                                <div className={cx('song-artist-avatar')}>
                                                    <div className={cx('song-artist-avatar-wrapper')}>
                                                        <img src={LifeImg} alt="" />
                                                    </div>
                                                </div>
                                                <div className={cx('song-artist-info')}>
                                                    <div className={cx('song-artist-role')}>
                                                        <span>Artist</span>
                                                    </div>
                                                    <div className={cx('song-artist-name')}>
                                                        <Link to="/artistinfo">
                                                            <span>Artist Name</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </content>
        </div>
    );
}

export default SongInfo;
