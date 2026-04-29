import CategoriesCard from "./CategoryInfo/CategoriesCard.tsx";
import {LuTrendingUp} from "react-icons/lu";
import {useAppSelector} from "../hooks/rtkHooks.ts";
import {selectTopSpendCategories} from "../features/categories/categoriesSelectors.ts";
import {selectBudgetInfo} from "../features/budgets/bugetsSelectors.ts";
import BudgetsCard from "./BudgetInfo/BudgetsCard.tsx";

const CategoriesAndBudgetsInfo = () => {
    const {categoriesWithSpend:topCategories , totalSpend} = useAppSelector(state => selectTopSpendCategories(state))
    const budgetInfo = useAppSelector(state => selectBudgetInfo(state))
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-2 mt-4 gap-4"}>
            <CategoriesCard title={"Top Spending Categories"} icon={<LuTrendingUp className={'w-5 h-5 text-gray-400'}  />} totalSpend={totalSpend} categories={topCategories}/>
            <BudgetsCard title={"Budgets overview"} budgets={budgetInfo}/>
        </div>
    )
}

export default CategoriesAndBudgetsInfo