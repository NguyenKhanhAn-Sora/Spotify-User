import styles from './Signup.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    const cx = classNames.bind(styles);

    const [passwordShown, setPasswordShown] = useState(false);
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(true);
    const [arrCheckPass, setArrCheckPass] = useState([]);
    const [pass, setPass] = useState('');
    const [isPassWord, setIsPassword] = useState(true);
    const [name, setName] = useState('');
    const [isName, setIsName] = useState(true);
    const genderList = ['Man', 'Woman', 'Something Else'];
    const [gender, setGender] = useState('');
    const [isGender, setIsGender] = useState(true);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [isBirth, setIsBirth] = useState(true);
    const [isYear, setIsYear] = useState(true);
    const [isAgeEnough, setIsAgeEnough] = useState(true);
    const termList = [
        'I would prefer not to receive marketing messages from Spotify',
        "Share my registration data with Spotify's content providers for marketing purposes.",
    ];
    const [term, setTerm] = useState([]);

    const handleOnChangeDay = (e) => {
        const inputValue = e.target.value;

        if (inputValue.length <= 2) {
            setDay(inputValue);
        }
    };

    const handleOnChangeYear = (e) => {
        const inputValue = e.target.value;

        if (inputValue.length <= 4) {
            setYear(inputValue);
        }
    };

    function hasSpecialCharacter(str) {
        const regex = /[!@#$%^&*(),.?":{}|<>~`'[\]\\\/\-+=;]/;
        return regex.test(str);
    }

    const handlePrevClick = () => {
        setStep(step - 1);
    };

    const handleNextClick = () => {
        setStep(step + 1);
    };

    const handleOnChangePass = (e) => {
        const newPass = e.target.value;
        setPass(newPass);
        let newArrCheckPass = [...arrCheckPass];

        if (newPass.length >= 1 && !newArrCheckPass.includes(1)) {
            newArrCheckPass.push(1);
        } else if (newPass.length < 1 && newArrCheckPass.includes(1)) {
            newArrCheckPass = newArrCheckPass.filter((arr) => arr !== 1);
        }

        if (hasSpecialCharacter(newPass) && !newArrCheckPass.includes(2)) {
            newArrCheckPass.push(2);
        } else if (!hasSpecialCharacter(newPass) && newArrCheckPass.includes(2)) {
            newArrCheckPass = newArrCheckPass.filter((arr) => arr !== 2);
        }
        if (newPass.length >= 10 && !newArrCheckPass.includes(3)) {
            newArrCheckPass.push(3);
        } else if (newPass.length < 10 && newArrCheckPass.includes(3)) {
            newArrCheckPass = newArrCheckPass.filter((arr) => arr !== 3);
        }

        setArrCheckPass(newArrCheckPass);
    };

    function handleNextClickStep1(e) {
        const testEmail = validateEmail(email);
        if (testEmail) {
            handleNextClick();
            setIsEmail(true);
        } else {
            e.preventDefault();
            setIsEmail(false);
        }
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

    function handleNextClickStep2(e) {
        if (arrCheckPass.length !== 3) {
            e.preventDefault();
            setIsPassword(false);
        } else {
            setIsPassword(true);
            setStep(step + 1);
        }
    }

    const handleNextClickStep3 = (e) => {
        let isvalid = true;

        if (name.length < 1) {
            setIsName(false);
            e.preventDefault();
            isvalid = false;
        } else {
            setIsName(true);
        }

        if (gender === '') {
            setIsGender(false);
            e.preventDefault();
            isvalid = false;
        } else {
            setIsGender(true);
        }

        if (day === '' || month === '' || year === '') {
            setIsBirth(false);
            e.preventDefault();
            isvalid = false;
        } else {
            setIsBirth(true);
            if (year <= 1900) {
                setIsYear(false);
                e.preventDefault();
                isvalid = false;
            } else {
                setIsYear(true);
            }
        }

        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        const currentDay = today.getDate();
        const currentMonth = today.getMonth() + 1; // Months are zero-based in JavaScript
        const currentYear = today.getFullYear();

        let age = currentYear - birthDate.getFullYear();
        if (currentMonth < month || (currentMonth === month && currentDay < day)) {
            age--;
        }

        if (age < 13) {
            setIsAgeEnough(false);
            e.preventDefault();
            isvalid = false;
        } else if (age >= 13) {
            setIsAgeEnough(true);
        }

        if (isvalid) {
            setStep(step + 1);
        }
    };

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleOnClickPassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const stepTitle = ['Create a password', 'Tell us about yourself', 'Terms & Conditions'];
    const currentTitle = stepTitle[step - 1];

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (step == 0) {
                handleNextClickStep1(e);
            } else if (step == 1) {
                handleNextClickStep2(e);
            } else if (step == 3) {
                handleNextClickStep3(e);
                
            }
        }
    });

    return (
        <div className={cx('main--signup')}>
            <div className={cx('root-main')}>
                <div className={cx('root-wrapper')}>
                    <div className={cx('logo_spotify')}>
                        <Link to="/">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <div className={step != 0 ? cx('step-header', 'show') : cx('step-header')}>
                        <div className={cx('step-process-wrapper')}>
                            <div className={cx('step-process', `process-step-${step}`)}></div>
                        </div>
                        <div className={cx('step-info')}>
                            <button onClick={handlePrevClick}>
                                <span>
                                    <svg
                                        data-encore-id="icon"
                                        role="img"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        className={cx('Svg-sc-ytk21e-0', 'dDkLMK')}
                                    >
                                        <path d="M15.957 2.793a1 1 0 0 1 0 1.414L8.164 12l7.793 7.793a1 1 0 1 1-1.414 1.414L5.336 12l9.207-9.207a1 1 0 0 1 1.414 0z"></path>
                                    </svg>
                                </span>
                            </button>
                            <div className={cx('step-info-wrapper')}>
                                <div className={cx('step-count')}>Step {step} of 3</div>
                                <p className={cx('step-title')}>{currentTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <form action="" className={cx('register-form')}>
                            <div className={step == 0 ? cx('step-1', 'show') : cx('step-1')}>
                                <h1>Sign up to start listening</h1>
                                <div className={!isEmail ? cx('username-gr', 'error') : cx('username-gr', 'not-error')}>
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        onBlur={handleonBlurEmail}
                                        required
                                        type="email"
                                        placeholder="name@domain.com"
                                        name="email"
                                        id="email"
                                        value={email}
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
                                        <span>
                                            This email is invalid. Make sure it's written like example@email.com
                                        </span>
                                    </div>
                                </div>
                                <a href="">Use phone number.</a>
                                <button onClick={handleNextClickStep1} className={cx('next-step')} type="button">
                                    <span>Next</span>
                                </button>
                                <div className={cx('or')}></div>
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
                                            <span>Sign up with Google</span>
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
                                            <span>Sign up with Facebook</span>
                                        </button>
                                    </li>
                                </ul>
                                <div className={cx('line')}></div>
                                <div className={cx('already-account')}>
                                    Already have an account?
                                    <Link to="/login"> Log in here</Link> .
                                </div>
                            </div>
                            <div className={step == 1 ? cx('step-2', 'show') : cx('step-2')}>
                                <div className={cx('step-content')}>
                                    <div
                                        className={
                                            isPassWord ? cx('password-gr', 'not-error') : cx('password-gr', 'error')
                                        }
                                    >
                                        <label htmlFor="password">Password</label>
                                        <div className={cx('input-password')}>
                                            <input
                                                onChange={handleOnChangePass}
                                                type={passwordShown ? 'text' : 'password'}
                                                placeholder="Password"
                                                name="password"
                                                id="password"
                                                value={pass}
                                            />
                                            <button
                                                type="button"
                                                className={
                                                    passwordShown
                                                        ? cx('btn-show-password', 'show')
                                                        : cx('btn-show-password')
                                                }
                                                onClick={handleOnClickPassword}
                                            >
                                                <svg
                                                    data-encore-id="icon"
                                                    role="img"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M22.207 2.824a1 1 0 1 0-1.414-1.414L17.15 5.053C15.621 4.363 13.92 4 12 4 8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453.278.246.562.479.853.697L1.793 20.41a1 1 0 1 0 1.414 1.414l3.126-3.126.003.002 1.503-1.503-.004-.001 1.73-1.73.004.001 1.567-1.567h-.004l4.68-4.681.001.004 1.595-1.595-.002-.003.11-.109.002.002 1.444-1.444-.003-.002 3.248-3.248zM14.884 7.32l-5.57 5.57A4.035 4.035 0 0 1 8.113 10c0-2.23 1.761-4 3.886-4 1.137 0 2.17.506 2.884 1.319zM7.9 14.304l-1.873 1.873a11.319 11.319 0 0 1-.957-.763C4.396 14.818 3.3 13.621 2.387 12c.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204A6.073 6.073 0 0 0 6.113 10c0 1.681.682 3.21 1.786 4.304zm11.568-5.2 1.415-1.415a16.503 16.503 0 0 1 2.756 3.853l.236.458-.236.458c-1.082 2.1-2.485 3.659-3.381 4.453C18.004 18.908 15.328 20 12 20a13.22 13.22 0 0 1-3.08-.348l1.726-1.726c.435.05.886.074 1.354.074 2.833 0 5.037-.907 6.931-2.586.674-.596 1.77-1.793 2.683-3.414a14.515 14.515 0 0 0-2.146-2.896z"></path>
                                                    <path d="M17.843 10.729c-.328 2.755-2.494 4.956-5.24 5.24l5.24-5.24z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('password-condition')}>
                                        <p>Your password must contain at least</p>
                                        <ul className={cx('condition-list')}>
                                            <li className={cx('condition-item', 'active')}>
                                                {arrCheckPass.includes(1) ? (
                                                    <span>
                                                        <svg
                                                            data-encore-id="icon"
                                                            role="img"
                                                            aria-hidden="true"
                                                            data-testid="password_requirement_one_letter-true"
                                                            className={cx('Svg-sc-ytk21e-0', 'cshJEm sc-esHPOb cdejvP')}
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
                                                        </svg>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <svg aria-hidden="true" width="12" height="12">
                                                            <ellipse
                                                                cx="6"
                                                                cy="6"
                                                                rx="5.5"
                                                                ry="5.5"
                                                                stroke="#A7A7A7"
                                                                strokeWidth="1"
                                                                fill="none"
                                                            ></ellipse>
                                                        </svg>
                                                    </span>
                                                )}
                                                <span>1 letter</span>
                                            </li>
                                            <li className={cx('condition-item', 'active')}>
                                                {arrCheckPass.includes(2) ? (
                                                    <span>
                                                        <svg
                                                            data-encore-id="icon"
                                                            role="img"
                                                            aria-hidden="true"
                                                            data-testid="password_requirement_one_letter-true"
                                                            className={cx('Svg-sc-ytk21e-0', 'cshJEm sc-esHPOb cdejvP')}
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
                                                        </svg>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <svg aria-hidden="true" width="12" height="12">
                                                            <ellipse
                                                                cx="6"
                                                                cy="6"
                                                                rx="5.5"
                                                                ry="5.5"
                                                                stroke="#A7A7A7"
                                                                strokeWidth="1"
                                                                fill="none"
                                                            ></ellipse>
                                                        </svg>
                                                    </span>
                                                )}
                                                <span>1 number or special character (example: # ? ! &)</span>
                                            </li>
                                            <li className={cx('condition-item', 'active')}>
                                                {arrCheckPass.includes(3) ? (
                                                    <span>
                                                        <svg
                                                            data-encore-id="icon"
                                                            role="img"
                                                            aria-hidden="true"
                                                            data-testid="password_requirement_one_letter-true"
                                                            className={cx('Svg-sc-ytk21e-0', 'cshJEm sc-esHPOb cdejvP')}
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
                                                        </svg>
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <svg aria-hidden="true" width="12" height="12">
                                                            <ellipse
                                                                cx="6"
                                                                cy="6"
                                                                rx="5.5"
                                                                ry="5.5"
                                                                stroke="#A7A7A7"
                                                                strokeWidth="1"
                                                                fill="none"
                                                            ></ellipse>
                                                        </svg>
                                                    </span>
                                                )}
                                                <span>10 characters</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={handleNextClickStep2} className={cx('next-step')} type="button">
                                        <span>Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className={step == 2 ? cx('step-3', 'show') : cx('step-3')}>
                                <div className={cx('step-content')}>
                                    <div
                                        className={isName ? cx('username-gr', 'not-error') : cx('username-gr', 'error')}
                                    >
                                        <label htmlFor="username">Name</label>
                                        <p>This name will appear on your profile</p>
                                        <input
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                setIsName(true);
                                                if (e.target.value.length < 1) {
                                                    setIsName(false);
                                                }
                                            }}
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={name}
                                        />
                                        <div className={!isName ? cx('email-error', 'active') : cx('email-error')}>
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
                                            <span>Enter a name for your profile.</span>
                                        </div>
                                    </div>
                                    <div className={cx('date-of-birth')}>
                                        <label htmlFor="">Date of birth</label>
                                        <p>
                                            Why do we need your date of birth? <a href="">Learn more</a>.
                                        </p>
                                        <div className={cx('input-dob')}>
                                            <input
                                                placeholder="dd"
                                                type="number"
                                                id="day"
                                                name="day"
                                                inputMode="numeric"
                                                min="0"
                                                max="99"
                                                pattern="\d*"
                                                autoComplete="bday-day"
                                                onChange={handleOnChangeDay}
                                                value={day}
                                            />
                                            <div className={cx('select-month')}>
                                                <select
                                                    name="month"
                                                    id="month"
                                                    value={month}
                                                    onChange={(e) => {
                                                        setMonth(e.target.value);
                                                        console.log(month);
                                                    }}
                                                >
                                                    <option selected disabled value="">
                                                        Month
                                                    </option>
                                                    <option value="1">January</option>
                                                    <option value="2">February</option>
                                                    <option value="3">March</option>
                                                    <option value="4">April</option>
                                                    <option value="5">May</option>
                                                    <option value="6">June</option>
                                                    <option value="7">July</option>
                                                    <option value="8">August</option>
                                                    <option value="9">September</option>
                                                    <option value="10">Octorber</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>
                                                <span>
                                                    <svg
                                                        data-encore-id="icon"
                                                        role="img"
                                                        aria-hidden="true"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M2.793 8.043a1 1 0 0 1 1.414 0L12 15.836l7.793-7.793a1 1 0 1 1 1.414 1.414L12 18.664 2.793 9.457a1 1 0 0 1 0-1.414z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <input
                                                placeholder="yyyy"
                                                type="number"
                                                id="year"
                                                name="year"
                                                inputMode="numeric"
                                                maxLength={4}
                                                pattern="\d*"
                                                autoComplete="bday-year"
                                                onChange={handleOnChangeYear}
                                                value={year}
                                            />
                                        </div>
                                        <div className={!isBirth ? cx('email-error', 'active') : cx('email-error')}>
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
                                            <span>Please fill all Date of birth</span>
                                        </div>
                                        <div className={!isYear ? cx('email-error', 'active') : cx('email-error')}>
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
                                            <span>Please enter a birth year from 1900 onwards.</span>
                                        </div>
                                        <div className={!isAgeEnough ? cx('email-error', 'active') : cx('email-error')}>
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
                                            <span>You’re too young to create a Spotify account.</span>
                                        </div>
                                    </div>
                                    <div className={cx('gender')}>
                                        <label htmlFor="">Gender</label>
                                        <p>
                                            We use your gender to help personalize our content recommendations and ads
                                            for you.
                                        </p>
                                        <div className={cx('gender-option')}>
                                            {genderList.map((genderItem, index) => (
                                                <label
                                                    key={index}
                                                    onClick={() => {
                                                        setGender(genderItem);
                                                    }}
                                                    className={genderItem === gender ? cx('active') : cx('')}
                                                    htmlFor=""
                                                >
                                                    <span className={cx('radio-gender')}></span>
                                                    <span>{genderItem}</span>
                                                </label>
                                            ))}
                                        </div>
                                        <div className={!isGender ? cx('email-error', 'active') : cx('email-error')}>
                                            <span>
                                                <svg
                                                    data-encore-id="icon"
                                                    role="img"
                                                    aria-label="Error:"
                                                    aria-hidden="true"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                                    <path d="M7.25 9V4h1.5v5h-1.5zm0 3.026v-1.5h1.5v1.5h-1.5z"></path>
                                                </svg>
                                            </span>
                                            <span>Select your gender.</span>
                                        </div>
                                    </div>
                                    <button onClick={handleNextClickStep3} className={cx('next-step')} type="button">
                                        <span>Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className={step == 3 ? cx('last-step', 'show') : cx('last-step')}>
                                <div className={cx('step-content')}>
                                    <div className={cx('clause-wrapper')}>
                                        {termList.map((termItem, index) => (
                                            <label
                                                onClick={() => {
                                                    if (term.includes(termItem)) {
                                                        setTerm(term.filter((item) => item !== termItem));
                                                    } else {
                                                        setTerm([...term, termItem]);
                                                    }
                                                }}
                                                className={term.includes(termItem) ? cx('active') : cx('')}
                                                key={index}
                                                htmlFor=""
                                            >
                                                <span></span>
                                                <span>{termItem}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <span className={cx('clause-notice')}>
                                        By clicking on sign-up, you agree to Spotify's{' '}
                                        <a href="">Terms and Conditions of Use</a>.
                                    </span>
                                    <span className={cx('clause-notice')}>
                                        To learn more about how Spotify collects, uses, shares and protects your
                                        personal data, please see <a href="">Spotify's Privacy Policy</a>.
                                    </span>
                                    <button className={cx('next-step')} type="button">
                                        <span>Sign up</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <footer>
                        <div>
                            <p>
                                This site is protected by reCAPTCHA and the Google&nbsp;
                                <br />
                                <a href="">Privacy Policy</a>
                                &nbsp;and&nbsp;
                                <a href="">Terms of Service</a>
                                &nbsp;apply.
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Signup;
