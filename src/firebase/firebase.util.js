import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAxWAUSn3wdnwlte9Z_mutb2ct2LSFK4G4",
    authDomain: "clothing-shop-1ab2e.firebaseapp.com",
    projectId: "clothing-shop-1ab2e",
    storageBucket: "clothing-shop-1ab2e.appspot.com",
    messagingSenderId: "837620411783",
    appId: "1:837620411783:web:db7a686bde3df32caa3722"
  }

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get()
    
    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })


        }catch(err){
            console.log(err)
        }
    }

    return userRef;
}

export const convertCollectionsSnapshotToMap = (collections)=>{
    const transformedCollection = collections.docs.map(doc=>{
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((acc,collection)=>{
        acc[collection.title.toLowerCase()]=collection

        return acc;
    },{})

}

export const getCurrentUser = ()=>{
    return new Promise((resolve, reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
}

export const addCollectionAnDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef= firestore.collection(collectionKey)

    const batch=firestore.batch()
    objectsToAdd.forEach(obj=>{
        const newDocRef=collectionRef.doc()
        
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}



if (!firebase.apps.length) {
    firebase.initializeApp(config)
    }else {
    firebase.app(); // if already initialized, use that one
}

export const auth=firebase.auth();
export const firestore=firebase.firestore();

export const googleProvider=new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'})
const signInWithGoogle=()=> auth.signInWithPopup(googleProvider)

export default signInWithGoogle;
