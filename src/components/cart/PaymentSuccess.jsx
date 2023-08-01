import React from 'react'
import {Link} from 'react-router-dom'

const PaymentSuccess = () => {
  return (
     <section className='paymentSuccess'>
        <main>
            <h1>Payment Confirmed</h1>
            <p>Your Order Placed successfully, You can check order Status below</p>
            <Link to={'/myorders'}>Check Status</Link>
        </main>
     </section>
  )
}

export default PaymentSuccess