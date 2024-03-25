import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface"

type BookState = {
    bookItems: BookingItem[];
}

const initialState: BookState = { bookItems:[] };

export const bookSlice = createSlice ({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            const remainItems = state.bookItems.findIndex(obj => obj.id === action.payload.id);
            
            if (remainItems !== -1) {
                state.bookItems[remainItems] = action.payload;
            } else {
                state.bookItems.push(action.payload);
            }
            
        },
        removeBooking: (state, action: PayloadAction<string>) => {
            state.bookItems = state.bookItems.filter(obj => obj.id !== action.payload);
        }
        
    }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer