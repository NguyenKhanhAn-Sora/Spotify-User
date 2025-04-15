import styles from './PodcastPage.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import ImagePodCast from '../../assets/img/browse-live-event.jpg';

function PodcastPage() {
    const cx = classNames.bind(styles);
    const podcastList = [
        {
            title: 'Podcast Title',
            id: '1',
            artist: 'Artist Podcast Name',
            date: 'Dec 2025',
            duration: '20 min 17sec',
        },
        {
            title: 'Podcast Title',
            id: '1',
            artist: 'Artist Podcast Name',
            date: 'Dec 2025',
            duration: '20 min 17sec',
        },
        {
            title: 'Podcast Title',
            id: '1',
            artist: 'Artist Podcast Name',
            date: 'Dec 2025',
            duration: '20 min 17sec',
        },
        {
            title: 'Podcast Title',
            id: '1',
            artist: 'Artist Podcast Name',
            date: 'Dec 2025',
            duration: '20 min 17sec',
        },
        {
            title: 'Podcast Title',
            id: '1',
            artist: 'Artist Podcast Name',
            date: 'Dec 2025',
            duration: '20 min 17sec',
        },
        {
            title: 'Podcast Title',
            id: '1',
            artist: 'Artist Podcast Name',
            date: 'Dec 2025',
            duration: '20 min 17sec',
        },
    ];

    const [backgroundPodcast, setBackgroundPodcast] = useState([]);

    const getColor = () => {
        let r, g, b;
        do {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
        } while ((r === g && g === b) || (r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255));

        return `linear-gradient(to bottom, rgba(${r}, ${g}, ${b},1),  rgba(${r}, ${g}, ${b},0.3))`;
    };

    useEffect(() => {
        podcastList.map(() => {
            setBackgroundPodcast((prev) => [...prev, getColor()]);
        });

        return () => {
            // clear
            setBackgroundPodcast([]);
        };
    }, []);

    return (
        <div className={cx('podcastpage--root')}>
            <section className={cx('podcastpage-section')}>
                <div className={cx('podcastpage-wrapper')}>
                    <div className={cx('podcastpage-content')}>
                        {podcastList.map((podcast, index) => (
                            <div className={cx('podcast-item')}>
                                <div className={cx('podcast-item-wrapper')}>
                                    <div className={cx('podcast-item-container')}>
                                        <div className={cx('podcast-item-header')}></div>
                                        <div
                                            className={cx('podcast-item-content')}
                                            style={{
                                                background: `${backgroundPodcast[index]}`,
                                            }}
                                        >
                                            <div className={cx('podcast-item-content-wrapper')}>
                                                <div className={cx('podcast-item-content-header')}>
                                                    <div className={cx('podcast-item-title')}>
                                                        <span> Podcast Title </span>
                                                    </div>
                                                    <div className={cx('podcast-item-artist')}>
                                                        <span> Episode </span>
                                                        <span> • </span>
                                                        <span className={cx('podcast-artist-name')}>
                                                            Artist Podcast Name
                                                        </span>
                                                    </div>
                                                </div>
                                                <a className={cx('podcast-item-content-main')}>
                                                    <div className={cx('podcast-image')}>
                                                        <div className={cx('podcast-image-wrapper')}>
                                                            <img src={ImagePodCast} alt="" />
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className={cx('podcast-item-content-footer')}>
                                                    <div className={cx('podcast-item-footer-text')}>
                                                        <span>
                                                            <span className={cx('date-add')}>Dec 2025 </span>
                                                            <span className={cx('duration')}>20 min 17sec </span>
                                                            <span className={cx('desc')}>
                                                                Lorem ipsum dolor sit amet consectetur, adipisicing
                                                                elit. Ratione eum ipsum sunt repudiandae expedita
                                                                exercitationem doloribus voluptatem facere, blanditiis
                                                                libero impedit mollitia explicabo voluptates doloremque
                                                                dicta ullam sapiente saepe nostrum.
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className={cx('podcast-item-footer-control')}>
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
                                                        <button className={cx('btn-add-music-playlist')}>
                                                            <span>
                                                                <svg
                                                                    data-encore-id="icon"
                                                                    role="img"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                                                    <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                        <button className={cx('btn-play-music', 'playing')}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PodcastPage;
