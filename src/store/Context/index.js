import { useState, createContext, useEffect } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [showAside, setShowAside] = useState(true);
    const [showLyricView, setShowLyricView] = useState(false);
    const [showQueueView, setShowQueueView] = useState(false);
    const [volumnValue, setVolumnValue] = useState(0.5);
    const [songPlaying, setSongPlaying] = useState(null);

    return (
        <Context.Provider
            value={{
                isLogin,
                setIsLogin,
                showAside,
                setShowAside,
                showLyricView,
                showQueueView,
                setShowLyricView,
                setShowQueueView,
                volumnValue,
                setVolumnValue,
                songPlaying,
                setSongPlaying,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;
