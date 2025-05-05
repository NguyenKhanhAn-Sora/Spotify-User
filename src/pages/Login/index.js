import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Route, Routes, Router, Link } from 'react-router-dom';
import Signup from '../Signup';

function Login() {
    const cx = classNames.bind(styles);
    const [passwordShown, setPasswordShown] = useState(false);

    const handleOnClickPassword = () => {
        setPasswordShown(!passwordShown);
    };

    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(true);
    const [password, setPassword] = useState('');

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function handleonBlurEmail(e) {
        const testEmail = validateEmail(email);
        if (testEmail) {
            setIsEmail(true);
        } else {
            e.preventDefault();
            setIsEmail(false);
        }
    }

    return (
        <div className={cx('main--login')}>
            <main>
                <div className={cx('content')}>
                    <div className={cx('logo_spotify')}>
                        <Link to="/">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <h1>Log in to Spotify</h1>
                    <ul className={cx('login-list')}>
                        <li className={cx('login-item')}>
                            <button className={cx('google-login')}>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                        <path
                                            fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                        ></path>
                                        <path
                                            fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                        ></path>
                                        <path
                                            fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                    </svg>
                                </span>
                                <span>Continue with Google</span>
                            </button>
                        </li>
                        <li className={cx('login-item')}>
                            <button className={cx('facebook-login')}>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#039be5"
                                            d="M24,5C13.5,5,5,13.5,5,24s8.5,19,19,19s19-8.5,19-19S34.5,5,24,5z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M21.2,20.7V24h-4.7v5h4.7v13.7C22.1,42.9,23,43,24,43c0.9,0,1.7-0.1,2.6-0.2V29h4.9l0.8-5h-5.7v-2.7	c0-2.1,0.7-3.9,2.6-3.9h3.1V13c-0.5-0.1-1.7-0.2-3.9-0.2C23.8,12.8,21.2,15.2,21.2,20.7z"
                                        ></path>
                                    </svg>
                                </span>
                                <span>Continue with Facebook</span>
                            </button>
                        </li>
                        <li className={cx('login-item')}>
                            <button className={cx('phone-login')}>
                                <span>Continue with Phone Number</span>
                            </button>
                        </li>
                    </ul>
                    <form action="" method="post" className={cx('login-form')}>
                        <div className={!isEmail ? cx('username-gr', 'error') : cx('username-gr', 'not-error')}>
                            <label htmlFor="username">Email address</label>
                            <input
                                type="text"
                                placeholder="name@domain.com"
                                name="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={(e) => handleonBlurEmail(e)}
                            />
                            <div className={!isEmail ? cx('email-error', 'active') : cx('email-error')}>
                                <span>
                                    <svg
                                        data-encore-id="icon"
                                        role="img"
                                        aria-label="Error:"
                                        aria-hidden="true"
                                        className="Svg-sc-ytk21e-0 kisTW IconExclamationCircleForText-sc-1lnefk5-0 ryVAU"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                        <path d="M7.25 9V4h1.5v5h-1.5zm0 3.026v-1.5h1.5v1.5h-1.5z"></path>
                                    </svg>
                                </span>
                                <span>This email is invalid. Make sure it's written like example@email.com</span>
                            </div>
                        </div>
                        <div className={cx('password-gr')}>
                            <label htmlFor="password">Password</label>
                            <div className={cx('input-password')}>
                                <input
                                    type={passwordShown ? 'text' : 'password'}
                                    placeholder="Password"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className={
                                        passwordShown ? cx('btn-show-password', 'show') : cx('btn-show-password')
                                    }
                                    onClick={handleOnClickPassword}
                                >
                                    <svg
                                        data-encore-id="icon"
                                        role="img"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        className="Svg-sc-ytk21e-0 gVGzpx"
                                    >
                                        <path d="M22.207 2.824a1 1 0 1 0-1.414-1.414L17.15 5.053C15.621 4.363 13.92 4 12 4 8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453.278.246.562.479.853.697L1.793 20.41a1 1 0 1 0 1.414 1.414l3.126-3.126.003.002 1.503-1.503-.004-.001 1.73-1.73.004.001 1.567-1.567h-.004l4.68-4.681.001.004 1.595-1.595-.002-.003.11-.109.002.002 1.444-1.444-.003-.002 3.248-3.248zM14.884 7.32l-5.57 5.57A4.035 4.035 0 0 1 8.113 10c0-2.23 1.761-4 3.886-4 1.137 0 2.17.506 2.884 1.319zM7.9 14.304l-1.873 1.873a11.319 11.319 0 0 1-.957-.763C4.396 14.818 3.3 13.621 2.387 12c.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204A6.073 6.073 0 0 0 6.113 10c0 1.681.682 3.21 1.786 4.304zm11.568-5.2 1.415-1.415a16.503 16.503 0 0 1 2.756 3.853l.236.458-.236.458c-1.082 2.1-2.485 3.659-3.381 4.453C18.004 18.908 15.328 20 12 20a13.22 13.22 0 0 1-3.08-.348l1.726-1.726c.435.05.886.074 1.354.074 2.833 0 5.037-.907 6.931-2.586.674-.596 1.77-1.793 2.683-3.414a14.515 14.515 0 0 0-2.146-2.896z"></path>
                                        <path d="M17.843 10.729c-.328 2.755-2.494 4.956-5.24 5.24l5.24-5.24z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button type="submit" className={cx('login-button')}>
                            Log in
                        </button>
                    </form>
                    <h2 className={cx('forgot-password')}>
                        <a href="">Forgot your password?</a>
                    </h2>
                    <h2 className={cx('sign-up')}>
                        Don't have an account?&nbsp;&nbsp;
                        <Link to="/signup">Sign up for Spotify.</Link>
                    </h2>
                </div>
            </main>
            <footer>
                <div>
                    <p>
                        This site is protected by reCAPTCHA and the Google&nbsp;
                        <a target="blank" href="https://policies.google.com/privacy">
                            Privacy Policy
                        </a>
                        &nbsp;and&nbsp;
                        <a target="blank" href="https://policies.google.com/terms">
                            Terms of Service
                        </a>
                        &nbsp;apply.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Login;
