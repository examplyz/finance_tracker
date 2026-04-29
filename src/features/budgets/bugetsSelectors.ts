import type {RootState} from "../../app/store.ts";
import type {Budget, Category, Transaction} from "../../types";
import {getCategorySpend, type ICategoryWithSpend, selectCategories} from "../categories/categoriesSelectors.ts";
import {selectTransactions, selectTransactionsInRangeForCategory} from "../transactions/transactionsSelectors.ts";
import {createSelector} from "@reduxjs/toolkit";

export interface IBudgetWithSpend extends Budget {
    category: ICategoryWithSpend
}

const selectBudgets = (state: RootState):Budget[] => state.budgetsReducer.budgets
const selectActiveBudgets = (state: RootState):Budget[] => {
    let budgets = state.budgetsReducer.budgets
    budgets = budgets.filter(budget => new Date(budget.until) > new Date())
    return budgets
}
export const selectBudgetInfo = createSelector(
    selectCategories,
    selectActiveBudgets,
    selectTransactions,
    (
        categories: Category[],
        budgets: Budget[],
        transactions: Transaction[]
    ): IBudgetWithSpend[] => {
        if(!budgets.length) return []
        let activeCategories: Category[] = categories.filter(category => {
            let isInActiveBudgets = false;
            for(let i = 0 ; i < budgets.length ; i++){
                if(budgets[i].categoryId === category.id){
                    isInActiveBudgets = true
                }
            }
            return isInActiveBudgets
        })
        if(!activeCategories.length) return []
        return  budgets.map(
                (budget) => {
                let category:ICategoryWithSpend
                for(let i = 0; i < activeCategories.length ; i++){
                    if(activeCategories[i].id === budget.categoryId){
                        let t = selectTransactionsInRangeForCategory(transactions , budget.from , budget.until , budget.categoryId)
                        category = {...activeCategories[i] , spend: getCategorySpend(budget.categoryId , t)}
                    }
                }
                return {...budget , category}
            }
        )
    }
);
