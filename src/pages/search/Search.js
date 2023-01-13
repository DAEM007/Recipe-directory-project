// all react imports
import { useLocation, Link } from "react-router-dom";
// hooks import
import useFetch from "../../hooks/useFetch";
// styles import
import "./Search.css";


const Search = () => {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');

    const { documents: recipeData, error, isPending } = useFetch("recipes");

    console.log(recipeData);

    return (
        <div>
            <h2 className="page-title">Recipes including "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipeData && recipeData.map((recipe) => (
                <div className="search" key={recipe.id}>

                    { recipe.title.toLowerCase()
                                .includes(query.toLowerCase())

                                ?

                                <div className="card">
                                    <h3>{recipe.title}</h3>
                                    <p>{recipe.cookingTime}</p>
                                    <div>{recipe.method.substring(0, 100)}....</div>
                                    <Link to={`./recipe/${recipe.id}`}>Cook This</Link>
                                </div>
                            
                                :

                                "" 
                    }

                </div>
            ))}
        </div>
    );
}

export default Search;