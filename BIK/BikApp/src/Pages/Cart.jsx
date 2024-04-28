import { useState } from 'react';
import Navigation from "../components/Navigation";

const products = [
    { name: 'Onion', price: 10 },
    { name: 'Apple', price: 5 },
    { name: 'Banana', price: 3 },
    // Add more products as needed
];

export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <>
            <Navigation />
            <div className="container mx-auto mt-5">
                <h1 className="text-3xl font-bold mb-5">Checkout</h1>
                <ul>
                    {products.map((product, index) => (
                        <li key={index} className="mb-3">
                            <span>{product.name} - ${product.price}</span>
                            <button onClick={() => addToCart(product)} className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">Add to Cart</button>
                        </li>
                    ))}
                </ul>
                <div className="mt-5">
                    <h2 className="text-xl font-bold mb-3">Cart Items</h2>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="mb-3">{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                    <p className="font-bold mt-3">Total Price: ${getTotalPrice()}</p>
                </div>
            </div>
        </>
    );
}
