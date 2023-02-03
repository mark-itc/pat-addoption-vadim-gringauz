import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSignedIn: false,
    email: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn (state) {
            state.isSignedIn = true;
            // state.email = action.payload
        },
        signOut (state) {
            state.isSignedIn = false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
