import {createSelector} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";
import type {Category , Transaction} from "../../types";
import {selectTransactions} from "../accounts/accountsSelectors.ts";

export interface ICategoryWithSpend extends Category {
    spend: number,
}

const selectCategories = (state: RootState):Category[] => state.categoriesReducer.categories


const getCategorySpend = (categoryId: string , transactions: Transaction[]):number=> {
    let spend = 0
    for(let i = 0 ; i < transactions.length ; i++){
        if(transactions[i].categoryId !== categoryId) continue;
        if(transactions[i].type !== 'expense') continue;
        spend += transactions[i].amount
    }
    return spend
}


export const selectTopSpendCategories = createSelector(
    selectCategories,
    selectTransactions,
    (categories, transactions) => {
        const categoriesWithSpend: ICategoryWithSpend[] = categories.map(category => {
            return {...category , spend: getCategorySpend(category.id, transactions) }
        })
        const totalSpend = categoriesWithSpend.reduce((sum , category ) => sum +=  category.spend  , 0)
        return {categoriesWithSpend: categoriesWithSpend.sort((a , b) => b.spend - a.spend).slice(0, 5) , totalSpend}
    }
)
