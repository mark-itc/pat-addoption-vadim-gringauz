import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    signedIn: false,
    email: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        signIn: (state, action) => {
            state.signedIn = true;
            state.email = action.payload
        },
        SignOut: (state) => {
            state.signedIn = false;
        },
    },
});

export const { signIn, SignOut } = authSlice.actions;

export default authSlice.reducer;
