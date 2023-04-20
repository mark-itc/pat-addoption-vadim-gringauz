import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import petsReducer from '../features/pets/petsSlice';
import settingsReducer from '../features/settings/settingsSlice';
import generalReducer from '../features/general/generalSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petsReducer,
    settings: settingsReducer,
    general: generalReducer,
  },
});
