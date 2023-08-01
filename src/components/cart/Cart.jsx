import React from 'react'
import burger1 from './../../assets/burger1.png'
import burger2 from './../../assets/burger2.png'
import burger3 from './../../assets/burger3.png'
import {Link} from 'react-router-dom'

const CartItem = ({ title, img, value, increament, decreament }) => (
    <div className='cartItem'>
        <div>
            <h4>{title}</h4>
            <img src={img} alt='Item' />
        </div>

        <div>
            <button onClick={decreament}>-</button>
            <input type='number' readOnly value={value} />
            <button onClick={increament}>+</button>
        </div>



    </div>
)
const Cart = () => {
    const increament = (item) => { };
    const decreament = (item) => { };

    return (
        <section className='cart'>
            <main>
                <CartItem
                    title={"Cheese Burger"}
                    img={burger1}
                    value={0}
                    increament={() => increament(1)}
                    decreament={() => decreament(1)}
                />

                <CartItem
                    title={"Veg Burger"}
                    img={burger2}
                    value={0}
                    increament={() => increament(2)}
                    decreament={() => decreament(2)}
                />

                <CartItem
                    title={"Cheese Burger with French Fries"}
                    img={burger3}
                    value={0}
                    increament={() => increament(3)}
                    decreament={() => decreament(3)}
                />

                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹{2000}</p>
                    </div>

                    <div>
                    <h4>Tax</h4>
                        <p>₹{2000 * 0.18}</p>
                    </div>

                    <div>
                    <h4>Shipping Charges</h4>
                        <p>₹{200}</p>
                    </div>
                     
                    <div>
                    <h4>Total</h4>
                        <p>₹{2000+2000 * 0.18+200}</p>
                    </div>
                    <Link to={'/shipping'}>Checkout</Link>
                </article>
            </main>
        </section>
    )
}

export default Cart