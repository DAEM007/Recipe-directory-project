// styles import
import "./ThemeSelector.css";
// assets import
import modeIcon from "../assets/mode-icon.svg";
// hooks import
import useTheme from "../hooks/useTheme";

const themeColors = ['#58249c', 'red', 'green']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
        console.log(mode);
    }

  return (
    <div className="theme-selector">
        <div className="toggle-mode">
            <img 
                src={modeIcon}
                onClick={toggleMode}
                alt="dark/light-mode"
            />
        </div>
        <div className="theme-buttons">
            {themeColors.map(color => (
                <div 
                    key={color}
                    onClick={() => {changeColor(color)}}
                    style={{background: color}}
                />
            ))}
        </div>
    </div>
  )
}
