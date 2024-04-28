// import { useState } from 'react';
// import fruit from '../assets/FruitsImg/fruit.png';
// import { Link } from 'react-router-dom';

// export default function Product() {
//     const [quantity, setQuantity] = useState(0);
//     const [cartItems, setCartItems] = useState([]);

//     const handleAdd = () => {
//         setQuantity(prevQuantity => prevQuantity + 1);
//     };

//     const handleSubtract = () => {
//         if (quantity > 0) {
//             setQuantity(prevQuantity => prevQuantity - 1);
//         }
//     };

//     const handleAddToCart = () => {
//         if (quantity > 0) {
//             const newItem = {
//                 name: 'Onion',
//                 price: 10,
//                 quantity: quantity
//             };
//             setCartItems(prevItems => [...prevItems, newItem]);
//             setQuantity(0); // Reset quantity after adding to cart
//         }
//     };

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//     };

//     const getTotalItems = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     return (
//         <div className="flex flex-col border rounded-lg border-gray-700 w-52 h-40 justify-center mt-10">
//             <img className="w-16 h-16 mt-2" src={fruit} alt="vegetable" />
//             <p className="mt-2 font-semibold">Onion</p>
//             <p className="font-semibold">10$</p>
//             <div className="flex items-center justify-between mt-2">
//                 <button onClick={handleSubtract} className="px-2 py-1 bg-gray-300 rounded-md">-</button>
//                 <span className="">{quantity}</span>
//                 <button onClick={handleAdd} className="px-2 py-1 bg-gray-300 rounded-md">+</button>
//             </div>
//             <Link to="/cart">  <button onClick={handleAddToCart} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
//                 Add to Cart
//             </button></Link>
//             <div className="mt-2">
//                 <h2 className="text-lg font-semibold">Cart</h2>
//                 <ul>
//                     {cartItems.map((item, index) => (
//                         <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
//                     ))}
//                 </ul>
//                 <p className="font-semibold">Total Items: {getTotalItems()}</p>
//                 <p className="font-semibold">Total Price: ${getTotalPrice()}</p>
//             </div>
//         </div>
//     );
// }




import { Link } from 'react-router-dom';
import Navigation from "../components/Navigation";
import { useState } from 'react';

const products = [
    { id: 1, name: 'Onion', price: 10 },
    { id: 2, name: 'Apple', price: 5 },
    { id: 3, name: 'Banana', price: 3 },
    // Add more products as needed
];

export default function ProductListPage() {
    const [productQuantities, setProductQuantities] = useState({});

    const handleAdd = (productName) => {
        setProductQuantities(prevQuantities => ({
            ...prevQuantities,
            [productName]: (prevQuantities[productName] || 0) + 1
        }));
    };

    const handleSubtract = (productName) => {
        if (productQuantities[productName] && productQuantities[productName] > 0) {
            setProductQuantities(prevQuantities => ({
                ...prevQuantities,
                [productName]: prevQuantities[productName] - 1
            }));
        }
    };

    return (
        <>
            <Navigation />
            <div className="container mx-auto mt-5">
                <h1 className="text-3xl font-bold mb-5">All Products</h1>
                <ul>
                    {products.map((product, index) => (
                        <li key={index} className="mb-3">
                            <span>{product.name} - ${product.price}</span>
                            <button onClick={() => handleSubtract(product.name)} className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">-</button>
                            <span className="mx-2">{productQuantities[product.name] || 0}</span>
                            <button onClick={() => handleAdd(product.name)} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">+</button>
                            <Link to={`/cart/${product.id}`} className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">Add to Cart</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
