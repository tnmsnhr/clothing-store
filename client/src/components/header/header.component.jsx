import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
                {currentUser ? <div className="option" onClick={()=>signOutStart()} className="option">SIGN OUT</div>:
                <Link className="option" to='/signin'>SIGN IN</Link>}
                <CartIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    )
}

const mapStateToProps= createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch=>({
    signOutStart: ()=>dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
