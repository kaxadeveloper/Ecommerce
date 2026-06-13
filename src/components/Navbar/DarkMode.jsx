import React from 'react';
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = React.useState("dark");

    return (
        <div>
            <img src={LightButton} alt=""
                className={`w-7 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"
                }`}
            />
            <img src={DarkButton} alt=""
                className={`w-7 cursor-pointer`}
            />
        </div>
    )
}

export default DarkMode
