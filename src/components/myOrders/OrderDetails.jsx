import React from 'react'

const OrderDetails = () => {
    return (
        <section className='orderDetails'>
            <main>
                <h1>Order Details</h1>
                <div>
                    <h2>Shipping</h2>
                    <p>
                        <b>Address:-</b>
                        {"Prime city 3, Greater Noida"}
                    </p>
                </div>

                <div>
                    <h2>Contact</h2>
                    <p>
                        <b>Name:-</b>
                        {"Krishan"}
                    </p>
                    <p>
                        <b>Phone:-</b>
                        {"7053051182"}
                    </p>
                </div>

                <div>
                    <h2>Status</h2>
                    <p>
                        <b>Order Status:-</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At:-</b>
                        {"20-7-2023"}
                    </p>
                    <p>
                        <b>Delivered At:-</b>
                        {"25-7-2023"}
                    </p>
                </div>

                <div>
                    <h2>Payment</h2>
                    <p>
                        <b>Payment Method:-</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference:-</b>
                        #{"aerfsdw"}
                    </p>
                    <p>
                        <b>Paid At:-</b>
                        {"20-7-2023"}
                    </p>
                </div>

                <div>
                    <h2>Amount</h2>
                    <p>
                        <b>Items Total:-</b>
                        ₹{"2000"}
                    </p>
                    <p>
                        <b>Shipping Charges:-</b>
                        ₹{"200"}
                    </p>
                    <p>
                        <b>Tax:-</b>
                        ₹{"100"}
                    </p>

                    <p>
                        <b>Total Amount:-</b>
                        ₹{"2300"}
                    </p>
                </div>
                <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{12}</span> x <span>{100}</span>
                    </div>
                </div>

                <div>
                    <h4>Veg Burger</h4>
                    <div>
                        <span>{10}</span> x <span>{500}</span>
                    </div>
                </div>

                <div>
                    <h4>Cheese Burger with French Fries</h4>
                    <div>
                        <span>{12}</span> x <span>{800}</span>
                    </div>
                </div>

                <div>
                    <h4 style={{fontWeight:800}}>Sub Total</h4>
                    <div style={{fontWeight:800}}>
                    ₹{2300}
                    </div>
                </div>

                </article>
                

            </main>
        </section>
    )
}

export default OrderDetails