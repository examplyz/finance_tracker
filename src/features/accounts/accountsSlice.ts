import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {Account} from "../../types";





interface AccountsState {
    accounts: Account[]
}

const initialState: AccountsState = {
    accounts: []
}

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        addAccount: (state , action: PayloadAction<Account>) => {
            state.accounts.push(action.payload)
        },
        deleteAccount: (state , action:PayloadAction<Account> ) => {
            state.accounts.filter(acc => acc.id != action.payload.id)
        },
        updateAccount: (state, action: PayloadAction<Account>) => {
            const index = state.accounts.findIndex(a => a.id === action.payload.id);
            if (index !== -1) state.accounts[index] = action.payload;
        },
    },
})

export const {addAccount , deleteAccount, updateAccount} = accountsSlice.actions


export default accountsSlice.reducer