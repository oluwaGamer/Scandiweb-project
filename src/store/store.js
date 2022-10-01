import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './connectState';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})