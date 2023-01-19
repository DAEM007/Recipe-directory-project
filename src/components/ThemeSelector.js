// styles import
import "./ThemeSelector.css";
// hooks import
import useTheme from "../hooks/useTheme";

const themeColors = ['#58249c', 'red', 'green']

export default function ThemeSelector() {
    const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
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
