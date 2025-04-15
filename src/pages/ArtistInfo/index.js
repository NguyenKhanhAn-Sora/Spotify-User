import styles from './ArtistInfo.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ArtistInfo() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('artist-info-root')}>
            <content>
                <div className={cx('artist-info-wrapper')}>
                    <div className={cx('artist-info-container')}>
                        <div className={cx('artist-info-header')}>
                            <div className={cx('header--content')}>
                                <div className={cx('artist-theme-image')}>
                                    <img src={LifeImg} alt="" />
                                </div>
                                <div className={cx('artist-info')}>
                                    <span className={cx('artist-verified')}>
                                        <span className={cx('verified-icon')}>
                                            <svg
                                                data-encore-id="verifiedBadge"
                                                role="img"
                                                aria-hidden="false"
                                                viewBox="0 0 24 24"
                                            >
                                                <title>Verified account</title>
                                                <path d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
                                            </svg>
                                        </span>
                                        Verified Artist
                                    </span>
                                    <span className={cx('artist-name', 'text-overflow-2-lines')}>
                                        <h1>Artist Name</h1>
                                    </span>
                                    <div className={cx('artist-detail')}>
                                        <span className={cx('artist-listened')}>900,541 monthly listeners</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('artist-info-content')}>
                            <div className={cx('content--background')}></div>
                            <div>
                                <div className={cx('artist-info-content--control')}>
                                    <div className={cx('artist-info-content--control-wrapper')}>
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
                                            <button className={cx('btn-follow-artist', 'followed')}>
                                                <span className={cx('follow')}>Follow</span>
                                                <span className={cx('followed')}>Followed</span>
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
                                <section className={cx('popular-music-artist')}>
                                    <div className={cx('popular-music-artist--wrapper')}>
                                        <div className={cx('section-title')}>
                                            <h3>Popular</h3>
                                        </div>
                                        <div className={cx('popular-music-list')}>
                                            <div className={cx('popular-music-list--wrapper')}>
                                                <div className={cx('popular-music-item')}>
                                                    <div className={cx('popular-music-item--wrapper')}>
                                                        <div className={cx('item-index')}>
                                                            <div className={cx('item-index-show')}>
                                                                <span>1</span>
                                                                <span style={{ display: 'none' }}>
                                                                    <img src={LifeImg} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className={cx('item-index-hover')}>
                                                                <button className={cx('btn-will-play')}>
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
                                                                <button className={cx('btn-will-pause')}>
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
                                                        <div className={cx('item-info')}>
                                                            <div className={cx('item-image')}>
                                                                <div className={cx('item-image-wrapper')}>
                                                                    <img src={LifeImg} alt="" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Link to="/songinfo">
                                                                    <span className={cx('item-name')}>Music Name</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className={cx('item-listened')}>
                                                            <span>1000000</span>
                                                        </div>
                                                        <div className={cx('item-duration')}>
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

export default ArtistInfo;
