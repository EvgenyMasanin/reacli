export const REDUX_STORE = `import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/root-reducer'

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
  ],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

`
