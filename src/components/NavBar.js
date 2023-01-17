// all react imports
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
// styles
import "./NavBar.css";
// component imports
import Searbar from "./SearchBar";

const NavBar = () => {
    const { color } = useContext(ThemeContext);


    return (
       <div className="navbar" style={ {background: color} }>
        <nav>
            <Link to="/" className="brand">
                <h1>Daem cusine</h1>
            </Link>
            <Searbar />
            <Link to="/create">Create recipe</Link>
        </nav>
       </div> 
    );
}
 
export default NavBar;