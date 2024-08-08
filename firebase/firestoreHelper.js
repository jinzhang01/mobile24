import { addDoc, collection } from 'firebase/firestore'; 
import { database } from './firebaseSetup';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';


export async function writeToDb(data, collectionName) {
    console.log("databae", database);
    try{
    await addDoc(collection(database, collectionName), data);
    // await setDoc(doc(database, collectionName, id), data, {merge:true});
    }
    catch(e){
        console.error("error adding document:", e);
    }
}

export async function deleteFromDb(docId, collectionName) {
    try{
    await deleteDoc(doc(database, collectionName, docId));
    }
    catch(e){
        console.error("error deleting document:", e);
    }
}

// update the data, add boolean warning to the data.
export async function updateDocInDb(docId, collectionName) {
    try{
        
    await updateDoc(doc(database, collectionName, docId), {
        warning: true
    });
    }
    catch(e){
        console.error("error updating document:", e);
    }
}


// await inside the async. 



// add to the db, if the route.params is passed, write to the db, otherwise add to the db.

export async function readAllDocs(collectionName) {
    try {
        const querySnapshot = await getDocs(collection(database, collectionName));
        let newArray = [];
        querySnapshot.forEach((doc) => {
            newArray.push(doc.data());
        });
        return newArray; 
    } catch (e) {
        console.error("error reading documents:", e);

    }
}





// create the signup createUserWithEmailAndPassword here 




// create the login signInWithEmailAndPassword here
