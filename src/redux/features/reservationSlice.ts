import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface"

type ReserveState = {
    reserveItems: ReservationItem[];
}

const initialState: ReserveState = { reserveItems:[] };

export const reservationSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>) => {
            const remainItems = state.reserveItems.findIndex(obj => obj.user === action.payload.user);
            
            if (remainItems !== -1) {
                state.reserveItems[remainItems] = action.payload;
            } else {
                state.reserveItems.push(action.payload);
            }
        },
        removeReservation: (state, action: PayloadAction<string>) => {
            state.reserveItems = state.reserveItems.filter(obj => obj.user !== action.payload);
        }   
    }
})

export const { addReservation, removeReservation } = reservationSlice.actions
export default reservationSlice.reducer