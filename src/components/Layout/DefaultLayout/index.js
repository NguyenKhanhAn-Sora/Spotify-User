import Aside from './Aside';
import Nav from './Nav';
import Footer from './Footer';
import ControlBar from './ControlBar';
import HeaderPage from './HeaderPage';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Fragment, useState, useContext } from 'react';
import Context from '../../../store/Context';

function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);
    const { showAside, setShowAside } = useContext(Context);
    const {showQueueView, setShowQueueView} = useContext(Context);

    const LayoutStyle = {
        gridTemplateColumns: (showAside || showQueueView)  ? '2fr 6fr 2fr' : '2fr 8fr',
    };

    return (
        <div className={cx('main-super-root')}>
            <div className={cx('main-content-root')} style={LayoutStyle}>
                <div className={cx('nav--default')}>
                    <Nav />
                </div>
                <main className={cx('main--default')}>
                    <HeaderPage />
                    <div className={cx('children--root')}>{children}</div>
                    <Footer />
                </main>
                <div className={cx('aside--default')}>
                    <Aside />
                </div>
            </div>
            <ControlBar />
        </div>
    );
}

export default DefaultLayout;
