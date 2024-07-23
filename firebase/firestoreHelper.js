import { addDoc, collection } from 'firebase/firestore'; // Corrected import path
import { database } from './firebaseSetup';


export async function writeToDb(data, collectionName) {
    console.log("databae", database);
    try{
    await addDoc(collection(database, collectionName), data);
    }
    catch(e){
        console.error("error adding document:", e);
    }
}