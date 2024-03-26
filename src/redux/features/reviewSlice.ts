import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReviewItem } from "../../../interface"

type ReviewState = {
    reviewItems: ReviewItem[];
}

const initialState: ReviewState = { reviewItems:[] };

export const reviewSlice = createSlice ({
    name: "review",
    initialState,
    reducers: {
        addReview: (state, action:PayloadAction<ReviewItem>) => {
            const remainItems = state.reviewItems.findIndex(obj => obj.id === action.payload.id);
            
            if (remainItems !== -1) {
                state.reviewItems[remainItems] = action.payload;
            } else {
                state.reviewItems.push(action.payload);
            }
            
        },
        removeReview: (state, action: PayloadAction<string>) => {
            state.reviewItems = state.reviewItems.filter(obj => obj.id !== action.payload);
        }
        
    }
})

export const { addReview, removeReview } = reviewSlice.actions
export default reviewSlice.reducer