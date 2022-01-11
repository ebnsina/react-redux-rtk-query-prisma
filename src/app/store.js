import { configureStore } from '@reduxjs/toolkit';
import { taskApi } from '../features/task/taskSlice';

const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
});

export default store;
