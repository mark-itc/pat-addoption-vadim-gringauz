import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkTheme: false,

};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.isDarkTheme = !state.isDarkTheme;
        },

    },
});

export const { toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
