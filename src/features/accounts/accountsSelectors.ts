import {createSelector} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";
import type {Transaction} from "../../types";

const selectAccounts = (state: RootState) => state.accountsReducer.accounts
const selectTransactions = (state: RootState) => state.transactionsReducer.transactions

const getTransactionImpact = (transaction: Transaction , accountId: string):number => {
    switch (transaction.type){
        case "income":
            return transaction.accountId == accountId ? transaction.amount : 0
        case "expense":
            return transaction.accountId == accountId ? -transaction.amount : 0
        case "transfer":
            if(transaction.accountId == accountId) return -transaction.amount
            if(transaction.toAccountId == accountId) return transaction.amount
            return 0;
    }
}

export const selectAccountBalance = createSelector(
    [selectTransactions,
    (_:RootState , accountId: string) => accountId ,
    (state: RootState , accountId: string) =>
        state.accountsReducer.accounts.find(a => a.id === accountId)?.balance ?? 0,
    ] ,(transactions , accountId, initialBalance) => {
        const delta = transactions.reduce(
            (sum , t) =>  sum + getTransactionImpact(t , accountId),
            0
        )
        return initialBalance + delta;
    }
)

export const selectAccountsWithBalance = createSelector(
    [
        selectAccounts,
        selectTransactions,
    ],
    (accounts , transactions) => {
     return  accounts.map(
         account => {
             const delta = transactions.reduce((sum , t) => sum + getTransactionImpact(t , account.id) , 0)
             return {
                 ...account,
                 balance: account.balance + delta
             }
         }
        )
    }
)
export const selectTotalBalance = createSelector(
    selectAccountsWithBalance,
    accounts => accounts.reduce((sum, a) => sum + a.balance, 0)
);