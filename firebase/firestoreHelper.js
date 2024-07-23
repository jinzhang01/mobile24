import { addDoc, collection } from 'firebase/firestore'; // Corrected import path
import { database } from './firebaseSetup';
import { deleteDoc, doc } from 'firebase/firestore';


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