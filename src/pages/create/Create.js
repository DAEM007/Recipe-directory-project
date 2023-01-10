// all react imports
import { useState } from "react";
// styles import
import "./Create.css";

const Create = () => {
    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [method, setMethod] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, cookingTime, method);
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

                {/* ingredients here */}

                <label>
                    <span>Recipe Method:</span>
                    <textarea
                    type="text"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    required
                    />
                </label>

                <button>Submit</button>

            </form>

        </div>
    );
}
 
export default Create;