import type {IBudgetWithSpend} from "../../features/budgets/bugetsSelectors.ts";

interface IBudgetInfo {
    budget: IBudgetWithSpend ,
    className?: string,
}

const BudgetInfo = ({budget , className = '' } : IBudgetInfo) => {
    console.log(budget)
    const limitFilled = ((budget.category.spend/budget.limit) * 100)
    return (
        <div className={'mb-2 ' + className}>
            <div className={'flex justify-between mb-2'}>
                <p>{budget.category.name}</p>
                <div className={'flex'}>
                    <p className={limitFilled > 90 ? "text-amber-500" : "text-gray-400"}>{`$${budget.category.spend}`}</p>
                    <p className={'text-gray-500'}>{` /$${budget.limit}`}</p>
                </div>
            </div>
            <div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden ">
                    <div className={"h-full rounded-full transition-all"}
                         style={{width: `${limitFilled}%` , backgroundColor: (limitFilled > 90 ? "oklch(76.9% 0.188 70.08)" : "oklch(70.2% 0.183 293.541)") }}></div>
                </div>
            </div>
        </div>
    )
}

export default BudgetInfo