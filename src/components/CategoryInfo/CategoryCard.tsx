import type {ICategoryWithSpend} from "../../features/categories/categoriesSelectors.ts";

interface ICategoryCard {
    category: ICategoryWithSpend ,
    className?: string,
    spendFromTotal: number,
    color: string,
}

const CategoryCard = ({category , className = '' , spendFromTotal, color} : ICategoryCard) => {
    return (
        <div className={'mb-2 ' + className}>
            <div className={'flex justify-between mb-2'}>
                <p>{category.name}</p>
                <p>{`$${category.spend}`}</p>
            </div>
            <div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden ">
                    <div className={"h-full rounded-full transition-all"}
                         style={{width: `${spendFromTotal}%` , backgroundColor: color}}></div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard