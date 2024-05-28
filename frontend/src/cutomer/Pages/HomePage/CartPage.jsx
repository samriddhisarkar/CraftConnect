// import React from 'react';
import { useCart } from './cart';
// import { useNavigate } from 'react-router-dom';
import { Container } from "reactstrap";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
    const [cart, setCart] = useCart();
    // const navigate = useNavigate();

    const backgroundImageStyle = {
    background: '#cbf7e0',
    background: '-webkit-linear-gradient(62deg, #cbf7e0 0%, #c0a197 100%)',
    background: 'linear-gradient(62deg, #cbf7e0 0%, #c0a197 100%)',
    height: '100vh',
    padding: '0',
    };
    
    
    

    const totalPrice = () => {
        try {
            let total = 0;
            cart.forEach((item) => {
                total = total + item.product_price;
            });
            return total.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handlePayment = async () => {
        try {
            const amount = cart.reduce((sum, item) => sum + item.product_price, 0);
            const res = await fetch(`http://localhost:2000/api/payment/order`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    amount
                })
            });

            const data = await res.json();
            console.log(data);
            handlePaymentVerify(data.data)
        } catch (error) {
            console.log(error);
        }
    };

    // handlePaymentVerify Function
    const handlePaymentVerify = async (data) => {
        const options = {
            key: 'rzp_test_JrKAzmnInWh8vu',
            amount: data.amount,
            currency: data.currency,
            name: "Samriddhi",
            description: "Test Mode",
            order_id: data.id,
            handler: async (response) => {
                console.log("response", response)
                try {
                    const res = await fetch(`http://localhost:2000/api/payment/verify`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        })
                    })

                    const verifyData = await res.json();

                    if (verifyData.message) {
                        toast.success(verifyData.message)
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#5f63b8"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex(item => item._id === pid);
            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem('cart', JSON.stringify(myCart));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container" style={backgroundImageStyle}>
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center" style={{ fontWeight: 'bold', fontSize: '35px' }}>YOUR CART</h4>
                    <h4 className="text-center" style={{ fontWeight: 'semibold', fontSize: '24px' }}>
                        {cart?.length ? "You have: " + cart.length + " item(s) in cart" : "Your cart is empty"}
                    </h4>
                </div>
            </div>
            <div className="container mt-3">
                <div className="card-container">
                    {cart?.map((p) => (
                        <div className="card" key={p._id}>
                            <img className="card-img-top" src={"http://localhost:2000/product_img/" + p.product_image} alt="Card image" />
                            <div className="card-body">
                                <p className="card-text">{p.product_name}</p>
                                <p className="card-text">{p.product_details.substring(0, 30)}</p>
                                <p className="card-text">Price: {p.product_price}</p>
                                <button className="btn btn-danger" onClick={() => removeCartItem(p._id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <Container>
                    <div className="text-center">
                        <h4 style={{ fontWeight: 'bold', fontSize: '20px' }}>Cart Summary</h4>
                        <p style={{ fontSize: '15px' }}>Total | Checkout | Payment</p>
                        <hr />
                        <button onClick={handlePayment} className="btn btn-primary">
                            <h4 style={{ fontSize: '18px' }}>Pay now: {totalPrice()}</h4>
                        </button>
                        <Toaster/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default CartPage;
