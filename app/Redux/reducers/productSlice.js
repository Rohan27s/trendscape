import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const backendBaseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;
const initialState = {
    product: null,
    products: [],
    error: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProductStart(state) {
            state.status = 'loading';
        },
        fetchProductSuccess(state, action) {
            state.product = action.payload;
            state.error = null;
            state.status = 'succeeded';
        },
        fetchProductFailure(state, action) {
            state.product = null;
            state.error = action.payload;
            state.status = 'failed';
        },
        fetchProductsStart(state) {
            state.status = 'loading';
        },
        fetchProductsSuccess(state, action) {
            state.products = action.payload;
            state.error = null;
            state.status = 'succeeded';
        },
        fetchProductsFailure(state, action) {
            state.products = [];
            state.error = action.payload;
            state.status = 'failed';
        },
    },
});

export const { fetchProductStart, fetchProductSuccess, fetchProductFailure, fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export const selectProduct = (state) => state.product.product;
export const selectProducts = (state) => state.product.products;
export const selectProductsStatus = (state) => state.product.status;

export const fetchProduct = (productId) => async (dispatch) => {
    try {
        dispatch(fetchProductStart());
        const response = await axios.get(`${backendBaseUrl}/products/${productId}`);
        dispatch(fetchProductSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductFailure(error.message));
    }
};

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductsStart());
        const response = await axios.get(`${backendBaseUrl}/products/`);
        dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message));
    }
};

export default productSlice.reducer;
