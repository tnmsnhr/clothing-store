import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { updateCollectins } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverviewComponent)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {

    state = {
        isLoading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections')
        collectionRef.get()
            .then( snapshot=>{
                const collectionMap = convertCollectionsSnapshotToMap(snapshot)
                this.props.updateCollections(collectionMap)
                this.setState({isLoading:false})
        })
        
    }

    render(){
        const {match}=this.props
        return (
            <div>
               <Route 
                exact 
                path={`${match.path}`} 
                render={(props)=> <CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>}/>

               <Route 
                path={`${match.path}/:collectionId`} 
                render={(props)=> <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props}/>}/>
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch=>{
    return {
       updateCollections: collectionMap=>dispatch(updateCollectins(collectionMap)) 
    }
}

export default connect(null, mapDispatchToProps)(ShopPage)