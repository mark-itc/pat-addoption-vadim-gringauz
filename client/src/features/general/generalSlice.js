import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSnackBarAlert: false,
  alertMessage: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      return {
        ...state,
        openSnackBarAlert: true,
        alertMessage: action.payload.message,
      };
    },
    hideAlert: (state, action) => {
      return {
        ...state,
        openSnackBarAlert: false,
        alertMessage: "",
      };
    },
  },
});

export const { showAlert, hideAlert } = generalSlice.actions;

export default generalSlice.reducer;
