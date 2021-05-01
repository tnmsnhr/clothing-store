import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import {
    fetchCollectionsSuccess,
    fetchCollectionsError
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync(){

    const collectionRef = firestore.collection('collections')

    try{
        const snapshot = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionMap))
    } catch(err){
        yield put(fetchCollectionsError(err))
    }
    
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}