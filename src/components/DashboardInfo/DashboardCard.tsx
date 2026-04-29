import type {ReactNode} from "react";

interface IDashboardCard {
    className?: string,
    icon: ReactNode,
    title: string,
    secondTitle: string,
    amount: string,
    iconBg: string,
    amountColor?: string
}

const DashboardCard = ({className ,  icon , title , iconBg,  secondTitle , amount, amountColor }: IDashboardCard) => {
    return (
        <div className={"rounded-xl p-6 " + className}>
            <div className={'flex items-center justify-between mb-4'}>
                <div className={'w-10 h-10 rounded-lg  flex items-center justify-center ' + iconBg}>
                    {icon}
                </div>
                <p className={'text-xs text-gray-400'}>{title}</p>
            </div>
            <h4 className={'text-2xl font-semibold mb-1 ' + amountColor}>
                {amount}
            </h4>
            <p className={'text-sm text-gray-400'}>
                {secondTitle}
            </p>
        </div>
    )
}

export default DashboardCard