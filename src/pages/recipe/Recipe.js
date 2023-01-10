// all react imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// styles import
import "./Recipe.css";
// all firebase imports
import { db } from "../../firebase/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";


const Recipe = () => {
    const { id } = useParams();
    // const history = useNavigate();
    const [recipeDoc, setRecipeDoc] = useState(null);
    const [isPending, setIsPending] = useState(false);


    const colRef = collection(db, "recipes");
    const docRef = doc(colRef, id);

    useEffect(() => {
        setIsPending(true);
        onSnapshot(docRef, (doc) => {
            // console.log(doc.data());
            setRecipeDoc(doc.data());
            setIsPending(false);
        })

    }, [docRef])


    return (
        <div>
            {!isPending && <div className="loading">Loading...</div>}
            {recipeDoc && <h3>{ recipeDoc.title }</h3>}
        </div>
    );
}
 
export default Recipe;