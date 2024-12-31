import { useContext } from "react";
import { ThemeContext } from "../ContextObj/Context";
const BgToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
    <div>
    <p>Current Theme: {theme}</p>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    );
    };

    export default BgToggle;


