import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const backendBaseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

const initialState = {
    order: null,
    error: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        createOrderStart(state) {
            state.status = 'loading';
        },
        createOrderSuccess(state, action) {
            state.order = action.payload;
            state.error = null;
            state.status = 'succeeded';
        },
        createOrderFailure(state, action) {
            state.order = null;
            state.error = action.payload;
            state.status = 'failed';
        },
    },
});

export const { createOrderStart, createOrderSuccess, createOrderFailure } = orderSlice.actions;

export const selectOrder = (state) => state.order.order;
export const selectOrderStatus = (state) => state.order.status;

export const createOrder = (orderData) => async (dispatch) => {
    try {
        dispatch(createOrderStart());
        const response = await axios.post(`${backendBaseUrl}/orders`, orderData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch(createOrderSuccess(response.data));
    } catch (error) {
        dispatch(createOrderFailure(error.message));
    }
};

export default orderSlice.reducer;
