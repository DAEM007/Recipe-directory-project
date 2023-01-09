// all react imports
import { useEffect, useState } from "react";
// all firebase imports
import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const useFetch = (col) => {
    const [documents, setDocuments] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetch = async () => {
            setIsPending(true);
            try{
                const colRef = collection(db, col);
                const unsub = onSnapshot(colRef, (snapshot) => {
                    let result = [];
                    snapshot.forEach((doc) => {
                        result.push({id: doc.id, ...doc.data()});
                        setDocuments(result);
                        setIsPending(false);
                    })

                    return unsub;
                })
            }catch(err){
                console.log(err.message);
                setIsPending(false);
            }
        }
        
        fetch();

    }, [col])

    return { documents, isPending, error };

}
 
export default useFetch;