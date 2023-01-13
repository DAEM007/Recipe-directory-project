// all react imports
import { Link } from "react-router-dom";
// styles
import "./NavBar.css";
// component imports
import Searbar from "./SearchBar";

const NavBar = () => {
    return (
       <div className="navbar">
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