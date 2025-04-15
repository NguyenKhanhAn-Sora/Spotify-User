import styles from './Browse.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../assets/img/Music-Image/Life.jfif';
import { useRef } from 'react';

function Browse() {
    const cx = classNames.bind(styles);

    // List of genres to be displayed

    const genresList = ['Pop', 'Lofi'];
    const genresListRefs = useRef([]);

    // End List of Genres

    // List Of Browse List
    const browseList = [
        'Pop',
        'Rock',
        'Hip-Hop',
        'Jazz',
        'Classical',
        'Country',
        'Electronic',
        'Reggae',
        'Blues',
        'Folk',
    ];
    const browseListRefs = useRef([]);

    // End List Of Browse List

    return (
        <div className={cx('browse--root')}>
            <content>
                <div className={cx('browse-genres')}>
                    <div className={cx('browse-genres-wrapper')}>
                        <div className={cx('browse-genres-header')}>
                            <h2>Your top genres</h2>
                        </div>
                        <div className={cx('browse-genres-list')}>
                            {genresList.map((item, index) => {
                                return (
                                    <div className={cx('browse-genres-item')}
                                        key={index}
                                        ref={(el) => (genresListRefs.current[index] = el)}
                                    >
                                        <a href="">
                                            <div class={cx('browse-genres-item-image')}>
                                                <img src={LifeImg} alt="" />
                                            </div>
                                            <span>{item}</span>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('browse-container')}>
                    <div className={cx('browse-container-wrapper')}>
                        <div className={cx('browse-container-header')}>
                            <h2>Browse All</h2>
                        </div>
                        <div className={cx('browse-container-list')}>
                            {browseList.map((item, index) => {
                                return (
                                    <div
                                        className={cx('browse-container-item')}
                                        key={index}
                                        ref={(el) => (browseListRefs.current[index] = el)}
                                    >
                                        <a href="">
                                            <div className={cx('browse-container-item-image')}>
                                                <img src={LifeImg} alt="" />
                                            </div>
                                            <span>{item}</span>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </content>
        </div>
    );
}

export default Browse;
