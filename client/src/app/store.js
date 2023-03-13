import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import petsReducer from '../features/pets/petsSlice';
import settingsReducer from '../features/settings/settingsSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petsReducer,
    settings: settingsReducer,
  },
});
