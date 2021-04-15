import React from 'react';
import { Route } from 'react-router';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const  ShopPage =({match})=>{

    return (
        <div>
           <Route exact path={`${match.path}`} component={CollectionsOverviewComponent}/>
           <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage