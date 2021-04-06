import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
                {currentUser ? <div className="option" onClick={()=>auth.signOut()} className="option">SIGN OUT</div>:
                <Link className="option" to='/signin'>SIGN IN</Link>}
                <CartIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    )
}

const mapStateToProps= state =>({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})


export default connect(mapStateToProps)(Header);
