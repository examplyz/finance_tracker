import type {ReactNode} from "react";
import CategoryInfo from "./CategoryInfo.tsx";
import type {ICategoryWithSpend} from "../../features/categories/categoriesSelectors.ts";

interface ICategoriesCard {
    title: string,
    icon? : ReactNode,
    className?: string,
    categories: ICategoryWithSpend[],
    totalSpend: number
}

const CategoriesCard = ({title, className, categories, icon , totalSpend} : ICategoriesCard) => {
    return (
        <div className={"rounded-xl p-6 text-white bg-[#0f0f14] border border-white/10 " + className}>
            <div className={'flex justify-between mb-4'}>
                <p className={'text-lg font-semibold'}>{title}</p>
                {icon}
            </div>
            <div>
                {categories.map(category => {
                    return <CategoryInfo category={category} key={category.id} color={category.color} spendFromTotal={(category.spend/totalSpend) * 100}/>
                })}
            </div>
        </div>
    )
}

export default CategoriesCard