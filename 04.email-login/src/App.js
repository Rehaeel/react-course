import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        setIsLoggedIn(true);
        localStorage.setItem("IsLogged", "1");
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("IsLogged");
    };

    useEffect(() => {
        const userIsLoggedIn = localStorage.getItem("IsLogged");
        if (userIsLoggedIn === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
