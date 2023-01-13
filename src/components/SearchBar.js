// all react imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles import
import "./SearchBar.css";


const Searchbar = () => {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(term);
        // At this point we direct the user to the search page
        navigate(`/search?q=${term}`);
        // setTerm('');
    }

    return (
        <div className="searchbar">
            <form onSubmit={handleSearch}>
                <label htmlFor="search">
                    <input 
                        type="text"
                        id="search"
                        placeholder="Search"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        required
                    />
                </label>    
            </form>
        </div>
    );
}

export default Searchbar;