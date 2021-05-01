import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey='pk_test_dCA9g8VK0ELSBNEnXS2yz4rp00NoPdd3om'
    const onToken= token=>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response=>{
            alert('Payment was successful')
        }).catch(error=>{
            console.log(error)
            alert('Payment was failed')
        })
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
