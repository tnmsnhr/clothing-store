import ShopActionTypes from "./shop.types"


export const updateCollectins = collectionMap=>{
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionMap
    }
}