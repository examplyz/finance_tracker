import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {Transaction} from "../../types";


interface TransactionsState {
    transactions: Transaction[]
}

const initialState: TransactionsState = {
    transactions: [
        {
            id: 'id-123',
            type: 'income',
            amount: 400,
            categoryId: 'cat-1',
            accountId: '123',
            date: '2026-4-30'
        },
        {
            id: 'id-123',
            type: 'expense',
            amount: 500,
            categoryId: 'cat-1',
            accountId: '123',
            date: '2026-4-20'
        },
        {
            id: 'id-123',
            type: 'expense',
            amount: 500,
            categoryId: 'cat-4',
            accountId: '123',
            date: '2026-4-20'
        },
        {
            id: 'id-123',
            type: 'expense',
            amount: 700,
            categoryId: 'cat-6',
            accountId: '123',
            date: '2026-4-20'
        },
    ]
}

export const transactionsSlice = createSlice({
    name: 'transcations',
    initialState,
    reducers: {
        addTransaction: (state , action: PayloadAction<Transaction>) => {
            state.transactions.push(action.payload)
        },
        deleteTransaction: (state , action:PayloadAction<Transaction> ) => {
            state.transactions.filter(t => t.id != action.payload.id)
        },
        updateTransaction: (state, action: PayloadAction<Transaction>) => {
            const index = state.transactions.findIndex(t => t.id === action.payload.id);
            if (index !== -1) state.transactions[index] = action.payload;
        },
    },
})

export const {addTransaction , deleteTransaction, updateTransaction} = transactionsSlice.actions


export default transactionsSlice.reducer