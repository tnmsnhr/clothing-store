import React from 'react'
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = props => {
    return (
        <div className="cart-icon" onClick={props.onToggleIcon}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return {
        onToggleIcon: ()=>dispatch(toggleCartHidden())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon)
