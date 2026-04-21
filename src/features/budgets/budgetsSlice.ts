import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {Budget} from "../../types";


interface BudgetsState {
    budgets: Budget[]
}

const initialState: BudgetsState = {
    budgets: []
}

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
        addBudget: (state , action: PayloadAction<Budget>) => {
            state.budgets.push(action.payload)
        },
        deleteBudget: (state , action:PayloadAction<Budget> ) => {
            state.budgets.filter(budget => budget.id != action.payload.id)
        },
        updateBudget: (state, action: PayloadAction<Budget>) => {
            const index = state.budgets.findIndex(b => b.id === action.payload.id);
            if (index !== -1) state.budgets[index] = action.payload;
        },
    },
})

export const {addBudget , deleteBudget, updateBudget} = budgetsSlice.actions


export default budgetsSlice.reducer