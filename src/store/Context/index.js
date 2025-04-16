import { useState, createContext } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [showAside, setShowAside] = useState(true);
    const [showLyricView, setShowLyricView] = useState(false);
    const [showQueueView, setShowQueueView] = useState(false);


    return (
        <Context.Provider value={{
            isLogin,
            setIsLogin,
            showAside,
            setShowAside,
            showLyricView,
            showQueueView,
            setShowLyricView,
            setShowQueueView
        }}>
            {children}
        </Context.Provider>
    );
}

export default Context;