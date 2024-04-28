
import axios from "axios";
import { addToCart, upadteQuantity } from "./action";

const API_BASE_URL = 'https://grocery-9znl.onrender.com/api/v1';


export const addProductTocart = async (item, quantity, dispatch, token) => {
    try {

        dispatch(addToCart({ ...item, quantity }));

        const payload = {
            groceryId: item._id,
            count: quantity,
        };
        const response = await axios.post(`${API_BASE_URL}/cart/add`, payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        dispatch(addToCart(response.data.data));

        console.log("Cart item added successfully:", response.data);
    } catch (error) {
    }
};


export const updateCartQuantity = async (dispatch, token, productId, newQuantity) => {

    
    try {

        const payload = {
            count: newQuantity,
        };
        console.log("pay",newQuantity)
        const response = await axios.patch(`${API_BASE_URL}/cart/updateItem/${productId}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log("res", response.data)
        dispatch(upadteQuantity(response.data))

    } catch (error) {
        console.error("okay", error);
    }
}


