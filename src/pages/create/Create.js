// all react imports
import { useRef, useState } from "react";
// styles import
import "./Create.css";

const Create = () => {
    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [method, setMethod] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, cookingTime, method, ingredients);

    }

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim();
        if(ing && !ingredients.includes(ing)){
            setIngredients(prevIng => [...prevIng, ing]);
        }
        setNewIngredient('');
        ingredientInput.current.focus();
    }

    return (
        <div className="create">
            <h2 className="page-title">Add a new recipe</h2>

            <form onSubmit={handleSubmit}>

                <label>
                    <span>Recipe Title:</span>
                    <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </label>

                <label>
                    <span>Time to cook (in minutes):</span>
                    <input 
                    type="number"
                    value={cookingTime}
                    onChange={(e) => setCookingTime(e.target.value)}
                    required
                    />
                </label>

                <label>
                    <span>Ingredients:</span>
                    <div className="ingredients">
                        <input 
                        type="text"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        ref={ingredientInput}
                        />
                        <button className="btn" onClick={handleAdd}>Add</button>
                    </div>
                </label>
                <p>Ingredients to use: {ingredients.map(ing => (
                    <em key={ing}>{ing},</em>
                ))}</p>

                <label>
                    <span>Recipe Method:</span>
                    <textarea
                    type="text"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    required
                    />
                </label>

                <button className="btn">Submit</button>

            </form>

        </div>
    );
}
 
export default Create;