import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = ()=>{
    return {
        type: ShopActionTypes.FETCH_COLLECTION_START
    }
}

export const fetchCollectionsSuccess = payload=>{
    return {
        type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
        payload: payload
    }
}

export const fetchCollectionsError = error=>{
    return {
        type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
        payload: error.message
    }
}

// export const fetchCollectionsStartAsync = ()=>{
    
//     return dispatch=>{
//         dispatch(fetchCollectionsStart())

//         const collectionRef = firestore.collection('collections')
//         collectionRef.get()
//             .then( snapshot=>{
//                 const collectionMap = convertCollectionsSnapshotToMap(snapshot)
//                 dispatch(fetchCollectionsSuccess(collectionMap))
//         }).catch(err=>{
//             dispatch(fetchCollectionsError(err))
//         }) 
//     }
// }