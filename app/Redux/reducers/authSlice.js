import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  token: null,
  error: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpStart(state) {
      state.status = 'loading';
    },
    signUpSuccess(state, action) {
      state.user = action.payload;
      state.error = null;
      state.status = 'succeeded';
    },
    signUpFailure(state, action) {
      state.user = null;
      state.error = action.payload;
      state.status = 'failed';
    },
    signInStart(state) {
      state.status = 'loading';
    },
    signInSuccess(state, action) {
      state.user = action.payload.username;
      state.token = action.payload.token;
      state.error = null;
      state.status = 'succeeded';
    },
    signInFailure(state, action) {
      state.user = null;
      state.error = action.payload;
      state.status = 'failed';
      toast.error("Invalid Credentials!")
    },
    signOut(state) {
      state.user = null;
      state.token = null;
      state.status = 'idle';
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  signInStart,
  signInSuccess,
  signInFailure,
  signOut, // Add signOut action
} = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectAuthStatus = (state) => state.auth.status;

const backendBaseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

export const signUp = (userData) => async (dispatch) => {
  try {
    dispatch(signUpStart());
    const response = await axios.post(`${backendBaseUrl}/signup`, userData);
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
};

export const signIn = (userData) => async (dispatch) => {
  try {
    dispatch(signInStart());
    const response = await axios.post(`${backendBaseUrl}/signin`, userData);
    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

export default authSlice.reducer;
