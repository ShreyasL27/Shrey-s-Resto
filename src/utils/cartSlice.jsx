import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        // Mutating the state (Redux Toolkit uses immer behind the scenes to mutate the state)
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop();
            // state.items.splice(action.payload, (item) => {
            //     item.card.info.id
            // });
        },
        // originalState = {items: ["pizza"]}
        clearItem: (state, action) => {
            // Either Mutate the state OR return a new State
            // state = [] does not clears cart (its just a local variable)
            state.items.length = 0; //[]
            //      OR
            // return {items: []}       // this also clears cart as it returns new state
        },
    },
});

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;