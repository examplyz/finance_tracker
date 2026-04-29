import DashboardCard from './DashboardCard.tsx'
import {LuWallet , LuArrowUpRight,  LuArrowDownRight} from "react-icons/lu";
import {selectThisMonth, selectTotalBalance} from "../../features/accounts/accountsSelectors.ts";
import {useAppSelector} from "../../hooks/rtkHooks.ts";

const DashboardInfo = () => {

    const totalBalance = useAppSelector(state => selectTotalBalance(state))
    const {income , expenses} = useAppSelector(state => selectThisMonth(state))

    return (
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
            <DashboardCard
                icon={<LuWallet className={'w-5 h-5 text-violet-400'}/>}
                className={'bg-linear-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/20 '}
                amount={`${totalBalance < 0 ? '- $' + Math.abs(totalBalance) : "$" + totalBalance }`}
                title={'All Accounts'}
                secondTitle={'Total Balance'}
                iconBg={'bg-violet-500/20'}
            />
            <DashboardCard
                icon={<LuArrowUpRight className={'w-5 h-5 text-emerald-400'}/>}
                className={'bg-[#0f0f14] border border-white/10'}
                amount={`$${income}`}
                amountColor={'text-emerald-400'}
                title={'This Month'}
                secondTitle={'Total Income'}
                iconBg={'bg-emerald-500/20'}
            />
            <DashboardCard
                icon={<LuArrowDownRight className={'w-5 h-5 text-rose-400'}/>}
                className={'bg-[#0f0f14] border border-white/10'}
                amount={`$${expenses}`}
                amountColor={'text-rose-400'}
                title={'This Month'}
                secondTitle={'Total Expenses'}
                iconBg={'bg-rose-500/20'}
            />
        </div>
    )
}

export default DashboardInfo