import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
import {GiArmoredBoomerang} from 'react-icons/gi'

const Orders = () => {

    const arr=[1, 2, 3, 4];
  return (
   <section className='tableClass'>
    <main>
        <table>
            <thead>
             <tr>
             <th>Order Id</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>User</th>
                <th>Action</th>
             </tr>

            </thead>
            <tbody>
            {
                arr.map((i)=>(
                    <tr key={i}>
                    <td>#aaddsfes</td>
                    <td>Processing</td>
                    <td>105</td>
                    <td>1400</td>
                    <td>COD</td>
                    <td>Krishan</td>
                    <td><Link to={`/order/${'adsgseddr'}`}><AiOutlineEye/></Link> <button></button><GiArmoredBoomerang/></td>
                </tr>
                ))
            }
            </tbody>
        </table>
    </main>

   </section>
  )
}

export default Orders