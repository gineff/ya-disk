import { configureStore } from '@reduxjs/toolkit';
import { resourcesApi } from '@/entities/resources/api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/** Redux store */

export const store = configureStore({
  reducer: {
    [resourcesApi.reducerPath]: resourcesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resourcesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/** Типизированный хук диспетчера, использовать его в компонентах. */
export const useAppDispatch: () => AppDispatch = useDispatch;

/** Типизированный хук селектора, использовать его в компонентах. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
