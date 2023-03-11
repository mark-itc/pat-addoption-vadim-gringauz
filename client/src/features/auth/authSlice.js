import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSignedIn: false,
  accessToken: null,
  signedUser: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      return {
        ...state,
        isSignedIn: true,
        accessToken: action.payload.accessToken,
        signedUser: action.payload.signedUser
      }
    },
    signOut (state) {
      return {
        ...state,
        isSignedIn: false,
        accessToken: null,
        signedUser: {}
      }
    }
  }
})

export const { signIn, signOut } = authSlice.actions

export default authSlice.reducer
