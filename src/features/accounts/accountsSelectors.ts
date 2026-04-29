import {createSelector} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";
import type {Transaction} from "../../types";
import {isInCurrentMonth} from "../../utils/isInCurrentMonth.ts";

const selectAccounts = (state: RootState) => state.accountsReducer.accounts
export const selectTransactions = (state: RootState) => state.transactionsReducer.transactions

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

interface IThisMonthTransactions {
    income: number,
    expenses: number
}

const getThisMonthIncomeAndExpenses = (transactions: Transaction[] , accountId: string): IThisMonthTransactions => {
    let income = 0
    let expenses = 0
    for(let i = 0 ;  i < transactions.length ; i++){
        if(!isInCurrentMonth(transactions[i].date)) continue;
        if(transactions[i].accountId != accountId) continue;
        if(transactions[i].type === 'expense') {
            expenses += transactions[i].amount
        }
        if(transactions[i].type ===  'income') {
            income += transactions[i].amount
        }
    }
    return {income , expenses}
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



export const selectThisMonth = createSelector(
    selectTransactions,
    selectAccounts ,
    (transactions , accounts): IThisMonthTransactions => {
        const thisMonthData = accounts.reduce((thisMonth , a) => {
            const data = getThisMonthIncomeAndExpenses(transactions , a.id)
            return {
                income: thisMonth.income + data.income,
                expenses: thisMonth.expenses + data.expenses
            }
        } , {income: 0 , expenses:0})

        return thisMonthData
    }
    )

