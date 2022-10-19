import "App.css";

import { useEffect, useState } from "react";

import NavBar from "features/navBar/containers";

const App = () => {
    const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth > 840);

    const resizeHandler = () => {
        setIsLargeDevice(window.innerWidth > 840);
    };

    useEffect(() => {
        if (window) {
            window.addEventListener("resize", resizeHandler);
            return () => window.removeEventListener("resize", resizeHandler);
        }
    }, [window]);

    return (
        <div className="App">
            <NavBar isLargeDevice={isLargeDevice} />
        </div>
    );
};

export default App;
