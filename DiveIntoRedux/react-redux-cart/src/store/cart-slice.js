import { createSlice } from '@reduxjs/toolkit';



const initialCartSlice = {
    items: [],
    totalQuantity: 0,
};



const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartSlice,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({ 
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price, 
                    name: newItem.title 
                });
            }
            else
            {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;   
            }
        },
        removeItemFromCart(state, action) { 
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }
            else
            {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    }
});


const sendCartData = (cartData) => {
    return (dispatch) => {
        dispatch();
    };
};


export const CartActions = cartSlice.actions;
export default cartSlice;
