// all react imports
import { useEffect, useRef, useState } from "react";
// all firebase imports
import { db } from "../firebase/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";

const useFetch = (col, docId) => {
    const [documents, setDocuments] = useState([]);
    const [document, setDocument] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const Id = useRef(docId).current;

    useEffect(() => {

         // initialize the firebase collection
        const colRef = collection(db, col);

        // Get all documents from the collection
        const unsub = onSnapshot(colRef, (snapshot) => {
            let result = [];
            snapshot.forEach((doc) => {
                result.push({id: doc.id, ...doc.data()});
            })
            // console.log(result);
            setDocuments(result);
            setIsPending(false);
        },
        (error) => {
            setError(error.message);
        })

        // Get a single document from the collection
        if(Id){
            const docRef = doc(colRef, Id);
            onSnapshot(docRef, (doc) => {
                setIsPending(true);
                // console.log(doc.data());
                setDocument(doc.data());
                setIsPending(false);
            },
            (error) => {
                setError(error.message);
            })
        }

        
        return unsub;

    }, [col, Id]);


    return { documents, document, isPending, error };

}
 
export default useFetch;