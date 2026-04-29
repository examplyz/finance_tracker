import type {Transaction} from "../../types";
import type {RootState} from "../../app/store.ts";
import {isDateInRange} from "../../utils/isInCurrentMonth.ts";

export const selectTransactions = (state: RootState): Transaction[] => state.transactionsReducer.transactions
export const selectTransactionsInRangeForCategory = (transactions: Transaction[] , from:string, until:string , categoryId: string): Transaction[] => {
    return transactions.filter(transaction => {
        const isInCategory = transaction.categoryId === categoryId
        const isInRange =  isDateInRange(transaction.date , from , until)
        if(isInCategory && isInRange) return true
        return false
    })
}