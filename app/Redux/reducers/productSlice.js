import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '@/app/Data/constants';

const initialState = {
    product: null,
    error: null,
    status: 'idle', 
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
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
    },
});

export const { fetchProductSuccess, fetchProductFailure } = productSlice.actions;

export const selectProduct = (state) => state.product.product;

export const fetchProduct = (productId) => async (dispatch) => {
    try {
        const product = PRODUCTS?.find((product) => product.id === productId);
        // console.log("products", PRODUCTS);
        // console.log("single product", product);
        dispatch(fetchProductSuccess(product));
    } catch (error) {
        dispatch(fetchProductFailure(error.message));
    }
};


export default productSlice.reducer;
