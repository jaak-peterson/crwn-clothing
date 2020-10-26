import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price  }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HKiWEKgNacT0ge7DV8F5eS7jXAtWij0gKtCpCb9OWgm3CUeZDBpgQev6XEpPhDCPo1TNdAKjRLAKpHNvedRrFZ800jgoSN88L';
  
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment')
    })
  }

  return (
    <StripeCheckout 
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;