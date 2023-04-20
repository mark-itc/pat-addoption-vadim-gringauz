import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openSnackBarAlert: false,
    alertMessage: ''

};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        showAlert: (state, action) => {
            return {
                ...state,
                openSnackBarAlert: true,
                alertMessage: action.payload.message
            }
        },
    },
});

export const { showAlert } = generalSlice.actions;

export default generalSlice.reducer;
