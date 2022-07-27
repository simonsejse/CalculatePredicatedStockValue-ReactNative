import { configureStore } from '@reduxjs/toolkit';

import infoReducer from './slices/infoSlice';

export default configureStore({
  reducer: { infoReducer },
});
