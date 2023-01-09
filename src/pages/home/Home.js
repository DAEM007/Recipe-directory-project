// styles import
import "./Home.css";
// firebase imports
import useFetch from "../../hooks/useFetch";


const Home = () => {
    const {documents: recipes, isPending, error} = useFetch('recipes');

    console.log(recipes);

    return (
        <div>
            Home
        </div>
    );
}
 
export default Home;