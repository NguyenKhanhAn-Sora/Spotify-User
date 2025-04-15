import styles from './Aside.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../../../assets/img/Music-Image/Life.jfif';
import PremiumIcon from '../../../../assets/img/icon/premium.png';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useState, useContext } from 'react';
import Context from '../../../../store/Context';

function Aside() {
    const cx = classNames.bind(styles);
    const { isLogin, setIsLogin } = useContext(Context);
    const [showUserNav, setShowUserNav] = useState(false);
    const [showCreditModal, setShowCreditModal] = useState(false);
    const { showAside, setShowAside, showQueueView, setShowQueueView } = useContext(Context);

    return (
        <aside className={cx('aside--root')}>
            <header>
                <div className={cx('header--aside')}>
                    <div className={cx('header--aside-wrapper')}>
                        {isLogin ? (
                            <div className={cx('header-logged')}>
                                <div className={cx('header-logged-wrapper')}>
                                    <div className={cx('user-avata')}>
                                        <img src={LifeImg} alt="Image" />
                                    </div>
                                    <div className={cx('user-info')}>
                                        <div className={cx('user-name')}>User name</div>
                                        <div className={cx('user-subs')}>
                                            <span>Premium</span>
                                            <img src={PremiumIcon} alt="Image" />
                                        </div>
                                    </div>
                                    <button
                                        className={cx('btn-acheron-dow', 'user-more-info')}
                                        onClick={() => {
                                            setShowUserNav(!showUserNav);
                                        }}
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
                                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                {showUserNav && (
                                    <div className={cx('header-logged-nav')}>
                                        <div className={cx('header-logged-nav-wrapper')}>
                                            <div className={cx('header-nav-content')}>
                                                <button>
                                                    <span>Account</span>
                                                    <svg
                                                        data-encore-id="icon"
                                                        role="img"
                                                        aria-label="External link"
                                                        aria-hidden="false"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                                        <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <span>Profile</span>
                                                    <svg
                                                        data-encore-id="icon"
                                                        role="img"
                                                        aria-label="External link"
                                                        aria-hidden="false"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                                        <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <span>Private Session</span>
                                                </button>
                                                <button>
                                                    <span>Settings</span>
                                                    <svg
                                                        data-encore-id="icon"
                                                        role="img"
                                                        aria-label="External link"
                                                        aria-hidden="false"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                                        <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className={cx('header-nav-footer')}>
                                                <button className={cx('btn-logout')}>
                                                    <span>Log out</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className={cx('header-unlogged')}>
                                <button className={cx('btn-sign-up')}>
                                    <Link to="/signup">
                                        <a href="">Sign up</a>
                                    </Link>
                                </button>
                                <button className={cx('btn-login')}>
                                    <Link to="/login">
                                        <a href="">Log in</a>
                                    </Link>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {showAside && (
                <content>
                    <div className={cx('music-info--aside')}>
                        <div className={cx('music-info-header')}>
                            <span className={cx('music-name')}>Music name</span>
                            <div className={cx('music-info-nav')}>
                                <button className={cx('btn-more-info--music')}>
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                            <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <button className={cx('btn-close-info--music')}>
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                            <path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className={cx('music-image')}>
                            <img src={LifeImg} alt="Image" />
                        </div>
                        <div className={cx('music-info-wrapper')}>
                            <div className={cx('music-info')}>
                                <Link to="/songinfo">
                                    <span className={cx('music-name', 'text-overflow-1-lines')}>Life</span>
                                </Link>
                                <Link to="/artistinfo">
                                    <span className={cx('music-artist', 'text-overflow-1-lines')}>Neuro-sama</span>
                                </Link>
                            </div>
                            <div className={cx('music-option')}>
                                <button className={cx('btn-share-music')}>
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                            <path d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"></path>
                                            <path d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <button className={cx('btn-add-music-playlist')}>
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                            <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className={cx('music-credit')}>
                            <div className={cx('music-credit-header')}>
                                <span>Credits</span>
                                <button
                                    className={cx('btn-show-music-credit')}
                                    onClick={() => {
                                        setShowCreditModal(true);
                                    }}
                                >
                                    <span className={cx('transition-0-3')}>Show All</span>
                                </button>
                                {showCreditModal && (
                                    <div className={cx('show-credit-modal', 'modal')}>
                                        <div className={cx('show-credit-modal-wrapper', 'modal-wrapper')}>
                                            <div className={cx('show-credit-content', 'modal-content')}>
                                                <div
                                                    className={cx(
                                                        'show-credit-content-wrapper',
                                                        'modal-content-wrapper',
                                                    )}
                                                >
                                                    <div className={cx('credit-content-header')}>
                                                        <p>Credits</p>
                                                        <button
                                                            className={cx('btn-close-modal')}
                                                            onClick={() => {
                                                                setShowCreditModal(false);
                                                            }}
                                                        >
                                                            <span>
                                                                <svg
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 32 32"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"
                                                                        fill="white"
                                                                        fill-rule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <hr />
                                                    <div className={cx('credit-content-main')}>
                                                        <p>Music Name</p>
                                                        <div>
                                                            <span className={cx('credit-modal-title')}>
                                                                Performed by
                                                            </span>
                                                            <span className={cx('credit-modal-artist')}>Artist</span>
                                                        </div>
                                                        <div>
                                                            <span className={cx('credit-modal-title')}>Written by</span>
                                                            <span className={cx('credit-modal-artist')}>Person</span>
                                                        </div>
                                                        <div>
                                                            <span className={cx('credit-modal-title')}>
                                                                Produced by
                                                            </span>
                                                            <span className={cx('credit-modal-artist')}>Person</span>
                                                        </div>
                                                        <p className={cx('credit-modal-source')}>
                                                            Source: &nbsp;
                                                            <span>Entertainment</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={cx('music-credit-wrapper')}>
                                <div className={cx('music-credit-info')}>
                                    <span className={cx('music-credit-name', 'text-overflow-1-lines')}>Neuro-sama</span>
                                    <span className={cx('music-credit-artist-role', 'text-overflow-1-lines')}>
                                        Main Artist, Composer, Lyricist
                                    </span>
                                </div>
                                <button className={cx('music-credit-follow')}>
                                    <span>Follow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('music-next-queue')}>
                        <div className={cx('music-next-queue--header')}>
                            <span>Next in queue</span>
                            <button className={cx('btn-open-queue')}>
                                <span className={cx('transition-0-3')}>Open queue</span>
                            </button>
                        </div>
                        <div className={cx('music-next-queue--wrapper', 'queue-wrapper')}>
                            <div className={cx('music-next-image', 'queue-image')}>
                                <img src={LifeImg} alt="Image" />
                                <div className={cx('music-next-queue--over', 'queue--over')}>
                                    <button>
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
                                </div>
                            </div>
                            <div className={cx('music-next-info', 'queue-info')}>
                                <div className={cx('music-next-name', 'queue-name')}>
                                    <span>Bugs</span>
                                </div>
                                <div className={cx('music-next-artist', 'queue-desc')}>
                                    <span>Ellie Minibot</span>
                                </div>
                            </div>
                            <button className={cx('btn-queue-music')}>
                                <span>
                                    <svg role="img" aria-hidden="true" viewBox="0 0 16 16">
                                        <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </content>
            )}
            {showQueueView && (
                <content>
                    <div className={cx('queue-view-wrapper')}>
                        <div className={cx('queue-view-header')}>
                            <div className={cx('queue-view-header-wrapper')}>
                                <h3>Queue</h3>
                                <button
                                    className={cx('btn-close-queue')}
                                    onClick={() => {
                                        setShowQueueView(!showQueueView);
                                    }}
                                >
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                            <path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className={cx('queue-view-content')}>
                            <div className={cx('queue-view-content-wrapper')}>
                                <div className={cx('queue-view-playing')}>
                                    <div className={cx('queue-view-playing-wrapper')}>
                                        <div className={cx('queue-view-playing-header')}>
                                            <span>Now playing</span>
                                        </div>
                                        <div className={cx('queue-view-playing-content')}>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('queue-view-nextup')}>
                                    <div className={cx('queue-view-nextup-wrapper')}>
                                        <div className={cx('queue-view-playing-header')}>
                                            <span>Next Up</span>
                                        </div>
                                        <div className={cx('queue-view-playing-content')}>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('queue-view-playing-item')}>
                                                <div className={cx('queue-view-playing-item-wrapper')}>
                                                    <div className={cx('queue-view-playing-image')}>
                                                        <div className={cx('queue-view-playing-image-wrapper')}>
                                                            <img src={LifeImg} alt="" />
                                                            <div className={cx('queue--over')}>
                                                                <button>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('queue-view-playing-info')}>
                                                        <h2
                                                            className={cx(
                                                                'queue-view-playing-name',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Music Name
                                                        </h2>
                                                        <span
                                                            className={cx(
                                                                'queue-view-playing-artist',
                                                                'text-overflow-1-lines',
                                                            )}
                                                        >
                                                            Artist Name
                                                        </span>
                                                    </div>
                                                    <button className={cx('btn-more-option')}>
                                                        <span>
                                                            <svg
                                                                data-encore-id="icon"
                                                                role="img"
                                                                aria-hidden="true"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
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
                    </div>
                </content>
            )}
        </aside>
    );
}

export default Aside;
