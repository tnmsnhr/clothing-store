import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey='pk_test_dCA9g8VK0ELSBNEnXS2yz4rp00NoPdd3om'
    const onToken= token=>{
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing Store'
            billingAddress
            shippingAddress
            image='https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon-715x715.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
