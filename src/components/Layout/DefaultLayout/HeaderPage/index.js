import styles from './HeaderPage.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Value } from 'sass';

function HeaderPage() {
    const cx = classNames.bind(styles);
    const [searchValue, setSearchValue] = useState('asdasd');
    const [searchHistory, setSearchHistory] = useState([]);

    const handleOnClickBtnDeleteValue = () => {
        setSearchValue('');
        setShowSearchResult(false);
    };

    const inputRef = useRef(null);

    const [showSearchResult, setShowSearchResult] = useState(false);

    useEffect(() => {
        const inputElement = inputRef.current;
        if (inputElement) {
            const handleInputFocus = () => {
                setShowSearchResult(true);
            };

            const handleInputBlur = () => {
                setShowSearchResult(false);
            };

            inputElement.addEventListener('focus', handleInputFocus);
            inputElement.addEventListener('blur', handleInputBlur);

            return () => {
                inputElement.removeEventListener('focus', handleInputFocus);
                inputElement.removeEventListener('blur', handleInputBlur);
            };
        }
    }, []);

    return (
        <div className={cx('header-page--root')}>
            <div className={cx('header-wrapper')}>
                <div className={cx('header--main')}>
                    <ul className={cx('nav-list--main')}>
                        <li className={cx('nav-item--main')}>
                            <Link to="/allpage">
                                <a href="" className={cx('nav-item-link--main')}>
                                    All
                                </a>
                            </Link>
                        </li>
                        <li className={cx('nav-item--main')}>
                            <Link to="/musicpage">
                                <a href="" className={cx('nav-item-link--main')}>
                                    Music
                                </a>
                            </Link>
                        </li>
                        <li className={cx('nav-item--main')}>
                            <Link to="/podcastpage">
                                <a href="" className={cx('nav-item-link--main')}>
                                    Podcast
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className={cx('search-tool')}>
                        <div className={cx('search-tool-wrapper')}>
                            <button className={cx('btn-search-icon')}>
                                <span>
                                    <svg
                                        data-encore-id="icon"
                                        role="img"
                                        aria-hidden="true"
                                        data-testid="search-icon"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                                    </svg>
                                </span>
                            </button>
                            <input
                                type="text"
                                placeholder="What do you want to try?"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                ref={inputRef}
                            />
                            {searchValue !== '' && (
                                <button
                                    className={cx('btn-delete-value')}
                                    onClick={() => {
                                        handleOnClickBtnDeleteValue();
                                    }}
                                >
                                    <span>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                                            <path d="M3.293 3.293a1 1 0 0 1 1.414 0L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 0 1 0-1.414z"></path>
                                        </svg>
                                    </span>
                                </button>
                            )}
                        </div>
                        {showSearchResult && searchHistory.length > 0 && (
                            <div className={cx('search-tool-result')}>
                                <div className={cx('search-tool-result-wrapper')}>
                                    <div className={cx('search-tool-result-header')}>
                                        <h4 className={cx('search-tool-result-header-title')}>Search history</h4>
                                        <span className={cx('search-tool-result-header-clear')}>Clear all</span>
                                    </div>
                                    <div className={cx('search-tool-result-list')}>
                                        {searchHistory.map((item) => (
                                            <div key={item.id} className={cx('search-tool-result-item')}>
                                                <span>{item.Value}</span>
                                                <span>{item.content}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={cx('search-tool-result-footer')}>
                                        <button>
                                            <span>Clear recent searches</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPage;
