// all react imports
import { useParams } from "react-router-dom";
// styles import
import "./Recipe.css";
// hooks import
import useFetch from "../../hooks/useFetch";


const Recipe = () => {
    const { id } = useParams();
    const { document: recipeDoc, isPending } = useFetch("recipes", id);

    return (
        <div className="recipe">
            {isPending && <div className="loading">Loading...</div>}
            {recipeDoc && (
                <>
                    <h2 className="page-title">{recipeDoc.title}</h2>
                    <p>Takes {recipeDoc.cookingTime} to cook</p>
                    <ul>{recipeDoc.ingredients.map((ing) => (
                        <li key={ing}>{ ing }</li>
                    ))}</ul>
                    <p className="method">{ recipeDoc.method }</p>  
                </>
            )}
        </div>
    );
}
 
export default Recipe;


