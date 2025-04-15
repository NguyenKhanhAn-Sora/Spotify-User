import styles from './AllPage.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { useEffect, useState, useRef, use } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function AllPage() {
    const cx = classNames.bind(styles);
    // -------------- Banner --------------
    const bannerItemsRef = useRef([]);
    const bannerLists = ['banner1', 'banner2', 'banner3'];
    const [bannerTransFormValue, setBannerTransFormValue] = useState(0);
    const bannerItemWidth = bannerItemsRef.current[0]?.offsetWidth || 0; // Lấy chiều rộng của phần tử đầu tiên trong mảng bannerItemsRef
    const [backGroundBanner, setBackGroundBanner] = useState([]);

    const getColor = () => {
        let r, g, b;
        do {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
        } while ((r === g && g === b) || (r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255));

        return `linear-gradient(to bottom, rgba(${r}, ${g}, ${b},1) 30%,  rgba(${r}, ${g}, ${b},0.05))`;
    };

    useEffect(() => {
        bannerLists.map(() => {
            setBackGroundBanner((prev) => [...prev, getColor()]);
        });

        return () => {
            // clear
            setBackGroundBanner([]);
        };
    }, []);

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

    const sectionLists = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'];
    const sectionListRefs = useRef([]);

    // -------------- End Section List --------------

    return (
        <div className={cx('allpage--root')}>
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
                                style={{
                                    background: `${backGroundBanner[index]}`,
                                }}
                                className={cx('banner-wrapper-item')}
                            >
                                <div className={cx('banner-padding')}>
                                    <div className={cx('card')}>
                                        <div className={cx('card-image')}>
                                            <img src={LifeImg} alt="" />
                                        </div>
                                        <div className={cx('card-desc')}>
                                            <div className={cx('card-info')}>
                                                <span className={cx('card-info-name')}>Music Playlist Name</span>
                                                <span className={cx('card-info-artist')}>
                                                    Music Playlist Artist Name
                                                </span>
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
                                                    className={cx('btn-control-play', 'btn-play btn-hover-scale-1-1')}
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
                    {sectionLists.map((item, index) => (
                        <section
                            key={index}
                            ref={(el) => (sectionListRefs.current[index] = el)}
                            className={cx('home-section-item')}
                        >
                            <div className={cx('section-item-header')}>
                                <div className={cx('section-item-title')}>Title</div>
                                <button className={cx('btn-see-all')}>
                                    <span>See All</span>
                                </button>
                            </div>
                            <div className={cx('home-section-list-wrapper')}>
                                <button className={cx('btn-prev')}>
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <div className={cx('section-item-list')}>
                                    <div className={cx('section-item-list--item')}>
                                        <div className={cx('item-wrapper-image')}>
                                            <img src={LifeImg} alt="Music Image" />
                                        </div>
                                        <div className={cx('item-wrapper-info')}>
                                            <div className={cx('item-wrapper-name')}>Music Name</div>
                                            <div className={cx('item-wrapper-artist')}>Music Artist</div>
                                        </div>
                                        <button className={cx('btn-play')}>
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
                                    <div className={cx('section-item-list--item')}>
                                        <div className={cx('item-wrapper-image')}>
                                            <img src={LifeImg} alt="Music Image" />
                                        </div>
                                        <div className={cx('item-wrapper-info')}>
                                            <div className={cx('item-wrapper-name')}>Music Name</div>
                                            <div className={cx('item-wrapper-artist')}>Music Artist</div>
                                        </div>
                                        <button className={cx('btn-play')}>
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
                                    <div className={cx('section-item-list--item')}>
                                        <div className={cx('item-wrapper-image')}>
                                            <img src={LifeImg} alt="Music Image" />
                                        </div>
                                        <div className={cx('item-wrapper-info')}>
                                            <div className={cx('item-wrapper-name')}>Music Name</div>
                                            <div className={cx('item-wrapper-artist')}>Music Artist</div>
                                        </div>
                                        <button className={cx('btn-play')}>
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
                                    <div className={cx('section-item-list--item')}>
                                        <div className={cx('item-wrapper-image')}>
                                            <img src={LifeImg} alt="Music Image" />
                                        </div>
                                        <div className={cx('item-wrapper-info')}>
                                            <div className={cx('item-wrapper-name')}>Music Name</div>
                                            <div className={cx('item-wrapper-artist')}>Music Artist</div>
                                        </div>
                                        <button className={cx('btn-play')}>
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
                                    <div className={cx('section-item-list--item')}>
                                        <div className={cx('item-wrapper-image')}>
                                            <img src={LifeImg} alt="Music Image" />
                                        </div>
                                        <div className={cx('item-wrapper-info')}>
                                            <div className={cx('item-wrapper-name')}>Music Name</div>
                                            <div className={cx('item-wrapper-artist')}>Music Artist</div>
                                        </div>
                                        <button className={cx('btn-play')}>
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
                                    <div className={cx('section-item-list--item')}>
                                        <div className={cx('item-wrapper-image')}>
                                            <img src={LifeImg} alt="Music Image" />
                                        </div>
                                        <div className={cx('item-wrapper-info')}>
                                            <div className={cx('item-wrapper-name')}>Music Name</div>
                                            <div className={cx('item-wrapper-artist')}>Music Artist</div>
                                        </div>
                                        <button className={cx('btn-play')}>
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
                                    <div className={cx('section-item-list--item')}>
                                        <div className={cx('item-wrapper-image')}>
                                            <img src={LifeImg} alt="Music Image" />
                                        </div>
                                        <div className={cx('item-wrapper-info')}>
                                            <div className={cx('item-wrapper-name')}>Music Name</div>
                                            <div className={cx('item-wrapper-artist')}>Music Artist</div>
                                        </div>
                                        <button className={cx('btn-play')}>
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
                                    <div className={cx('section-item-list--item')}>
                                        <div className={cx('item-wrapper-image')}>
                                            <img src={LifeImg} alt="Music Image" />
                                        </div>
                                        <div className={cx('item-wrapper-info')}>
                                            <div className={cx('item-wrapper-name')}>Music Name</div>
                                            <div className={cx('item-wrapper-artist')}>Music Artist</div>
                                        </div>
                                        <button className={cx('btn-play')}>
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
                                <button className={cx('btn-next')}>
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

export default AllPage;
