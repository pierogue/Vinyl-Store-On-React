import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
	value: [],
};


const cartSlice = createSlice({
    name: 'cart',
	initialState,
	reducers: {
        addToCart : (state, action) => {
            let res = {};
            Object.assign(res, action.payload);
            
            if(state.value.find((i)=> i.name == res.name)){
                if(state.value.find((i)=>i.name == res.name).amount < action.payload.amount){
                    state.value.find((i)=> i.name == res.name).amount++;
                }
                else {
                    alert("Нет на складе!")
                }
            }
            else {
                res.amount = 1;
                state.value.push(res);
            }
        },
        deleteFromCart : (state, action) => {
            if(action.payload.amount == 1){
                state.value.splice(state.value.indexOf(state.value.find((i)=>i.name == action.payload.name)), 1);
            }
            else {
                state.value.find((i)=>i.name==action.payload.name).amount--
            }
        },
	}
},
)

export const { addToCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;