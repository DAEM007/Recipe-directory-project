// styles import
import "./Home.css";
// firebase imports
import useFetch from "../../hooks/useFetch";
// component imports
import RecipeList from "../../components/RecipeList";


const Home = () => {
    const {documents: recipeData, isPending, error} = useFetch('recipes');

    return (
        <div className="home">
            {error && <p className="error">{ error }</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipeData && <RecipeList recipes={recipeData} />}
        </div>
    );
}

export default Home;