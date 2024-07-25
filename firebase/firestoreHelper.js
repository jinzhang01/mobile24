import { addDoc, collection } from 'firebase/firestore'; 
import { database } from './firebaseSetup';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';




export async function writeToDb(data, collectionName) {
    console.log("databae", database);
    try{
    await addDoc(collection(database, collectionName), data);
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
