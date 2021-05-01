import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted,...otherProps}) => {
    return (
        <button  className={`${inverted? 'inverted':''} ${isGoogleSignIn? 'google-sign-in':''} custom-button`} onClick={otherProps.click}>
            {children}
        </button>
    )
}

export default CustomButton
