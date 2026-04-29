import CategoriesCard from "./CategoriesCard.tsx";
import {LuTrendingUp} from "react-icons/lu";
import {useAppSelector} from "../../hooks/rtkHooks.ts";
import {selectTopSpendCategories} from "../../features/categories/categoriesSelectors.ts";

const CategoriesInfo = () => {
    const {categoriesWithSpend:topCategories , totalSpend} = useAppSelector(state => selectTopSpendCategories(state))
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-2 mt-4 gap-4"}>
            <CategoriesCard title={"Top Spending Categories"} icon={<LuTrendingUp className={'w-5 h-5 text-gray-400'}  />} totalSpend={totalSpend} categories={topCategories}/>
        </div>
    )
}

export default CategoriesInfo