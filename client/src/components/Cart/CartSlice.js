import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import httpAgent from "../../api/httpAgent";

const initialState = {
    basket:[] | null,
    status:'idle'
}

export const addBasketItemAsync = createAsyncThunk(
    'basket/addBasketItemAsync',
        async ({productId,quantity=1})=>{
            try {
                return await httpAgent.Basket.addToBasket(productId,quantity);
            }catch (err) {
                console.log(err)
            }
        }
)

export const removeBasketItemAsync = createAsyncThunk(
    'basket/removeBasketItemAsync',
        async ({productId, quantity}) => {
            try {
                await httpAgent.Basket.removeToBasket(productId, quantity);
            } catch (err) {
                console.log(err)
            }
        }
)

export const CartSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        setBasket:(state,action)=>{
            state.basket = action.payload
        },
        clearBasket:(state) =>{
            state.basket = null;
        }
    },
    extraReducers: (builder => {
        builder.addCase(addBasketItemAsync.pending,(state,action)=>{
            console.log(action)
            state.status = 'pendingAddItem' + action.meta.arg.productId;
        });
        builder.addCase(addBasketItemAsync.fulfilled,(state,action)=>{
            state.basket = action.payload;
            state.status = 'idle'
        });
        builder.addCase(addBasketItemAsync.rejected,(state)=>{
            state.status = 'idle'
        });
        builder.addCase(removeBasketItemAsync.pending,(state,action)=>{
            state.status = 'pendingRemoveItem' + action.meta.arg.productId;
        });
        builder.addCase(removeBasketItemAsync.fulfilled,(state,action)=>{
            const {productId,quantity} = action.meta.arg;
            const itemIndex = state.basket?.items.findIndex(i=> i.productId === productId)
            if(itemIndex === -1 || itemIndex === undefined) return;
            state.basket.items[itemIndex].quantity -= quantity;
            if (state.basket?.items[itemIndex].quantity === 0)
                state.basket.items.splice(itemIndex,1)
            state.status = 'idle';
        });
        builder.addCase(removeBasketItemAsync.rejected,(state)=>{
            state.status = 'idle';
        })
    })
})

export const {setBasket,clearBasket} = CartSlice.actions;