// all react imports
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// hooks import
import useFetch from "../../hooks/useFetch";
// styles import
import "./Search.css";
// component imports
import RecipeList from "../../components/RecipeList";


const Search = () => {
    const [filtered, setFiltered] = useState(null);
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');

    const { documents: recipeData, error, isPending } = useFetch("recipes");

    // console.log(recipeData);

    useEffect(() => {

        setFiltered(recipeData.filter(data => {
            return data.title.toLowerCase().includes(query.toLowerCase());
        }))

    }, [query, recipeData])


    return (
        <div>
            <h2 className="page-title">Recipes including "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {filtered && <RecipeList recipes={filtered} />}
        </div>
    );
}

export default Search;