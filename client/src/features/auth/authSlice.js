import { createSlice } from '@reduxjs/toolkit';
import AuthAPI from '../../helpers/AuthAPI';

const initialState = {
    isSignedIn: false,
    signedUser: {}
    // signedUser: {
    //     id: '1234567',
    //     email: 'l77d@gmail.com',
    //     firstName: 'Luka',
    //     lastName: 'Doncic',
    //     avatar: 'https://ml8dx8xgrqnj.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://www.stokastic.com/wp-content/uploads/2022/05/LUka-Doncic-Mavericks-NBA-DFS-Picks-DraftKings-Best-NBA-Bets-Today-Player-Props.jpg',
    //     lastSignedin: new Date(),

    // }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        async signIn(state, action) {
            state.signedUser = await AuthAPI.signIn(action.payload)
            if (state.signedUser._id) state.isSignedIn = true;
        },
        signOut(state) {
            state.isSignedIn = false;
            state.signedUser = {}
        },
    },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
