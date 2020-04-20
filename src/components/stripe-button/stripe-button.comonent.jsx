import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_xWRdvnchWg1YQP5oMy852VrQ00R9nB3UWD' ;

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='Coriando'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        
        />
    );
};

export default StripeCheckoutButton;