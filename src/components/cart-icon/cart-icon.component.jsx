import React from 'react'
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = props => {
    return (
        <div className="cart-icon" onClick={props.onToggleIcon}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{props.itemCount}</span>
        </div>
    )
}

const mapStateToProps = state=>{
    return {
        itemCount: selectCartItemsCount(state)
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onToggleIcon: ()=>dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
