import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from "../features/categories/categoriesSlice.ts";
import settingsReducer  from '../features/settings/settingsSlice.ts'
import accountsReducer  from '../features/accounts/accountsSlice.ts'
import budgetsReducer  from '../features/budgets/budgetsSlice.ts'
import transactionsReducer  from '../features/transactions/transactionsSlice.ts'


export const store = configureStore({
    reducer: {
        categoriesReducer,
        settingsReducer,
        accountsReducer,
        budgetsReducer,
        transactionsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch