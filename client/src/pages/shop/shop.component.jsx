import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { createStructuredSelector } from 'reselect';

import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';


const ShopPage = ({match, fetchCollectionsStartAsync}) => {

    useEffect(()=>{
        fetchCollectionsStartAsync()
    },[fetchCollectionsStartAsync])

    return (
        <div>
           <Route 
            exact 
            path={`${match.path}`} 
            component={CollectionOverviewContainer}
            />

           <Route 
            path={`${match.path}/:collectionId`} 
            component={CollectionPageContainer}/>
        </div>
    )
    
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch=>{
    return {
        fetchCollectionsStartAsync: ()=>dispatch(fetchCollectionsStart()) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)