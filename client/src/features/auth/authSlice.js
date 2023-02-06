import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSignedIn: false,
    signedUser: {
        id: '1234567',
        email: 'l77d@gmail.com',
        firstName: 'Luka',
        lastName: 'Doncic',
        avatar: 'https://ml8dx8xgrqnj.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://www.stokastic.com/wp-content/uploads/2022/05/LUka-Doncic-Mavericks-NBA-DFS-Picks-DraftKings-Best-NBA-Bets-Today-Player-Props.jpg',
        lastSignedin: new Date(),

    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state) {
            state.isSignedIn = true;
            // state.email = action.payload
        },
        signOut(state) {
            state.isSignedIn = false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
