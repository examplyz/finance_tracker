import {Link, Outlet, useLocation} from "react-router";
import Logo from "./Logo.tsx";
import { LuReceipt,  LuWallet , LuX , LuMenu , LuCreditCard , LuSettings , LuLayoutDashboard } from "react-icons/lu";
import { SiGoogleanalytics } from "react-icons/si";
import { useState} from "react";
import {useAuth} from "../app/AuthProvider.tsx";
import type {IconType} from "react-icons";


interface ILink {
    name: string ,
    href: string,
    icon: IconType
}

const navigation: ILink[] = [
    { name: 'Dashboard', href: '/dashboard', icon: LuLayoutDashboard },
    { name: 'Transactions', href: '/transactions', icon: LuReceipt },
    { name: 'Analytics', href: '/analytics', icon: SiGoogleanalytics },
    { name: 'Budgets', href: '/budgets', icon: LuWallet },
    { name: 'Accounts', href: '/accounts', icon: LuCreditCard },
    { name: 'Settings', href: '/settings', icon: LuSettings },
]

const Layout = () => {
    const location = useLocation();
    const {user} = useAuth()
    const [sidebarOpen , setSidebarOpen] = useState<boolean>(false)
    return (<div className={'flex  text-white'}>
        <aside className={`dark:bg-[#0f0f14] fixed top-0 left-0 md:static  flex-col flex justify-between w-64 h-screen border-white/10 border-l border-r z-50 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            <div className={'px-7 py-5 border-b flex justify-between border-white/10'}>
                <Logo nameText={'text-lg'} logoText={'text-2xl'}/>
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="md:hidden p-1 hover:bg-white/5 rounded"
                >
                    <LuX className="w-5 h-5" />
                </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
                {navigation.map((item) => {
                    const isActive = location.pathname === item.href
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                                isActive
                                    ? 'bg-violet-500/10 text-violet-400 font-medium'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className={'border-t border-white/10 py-5'}>
                {user &&
                <div className={'flex gap-2 px-5 items-center'}>
                    <span className={'text-xl p-2 bg-purple-500 rounded-full'}>
                        {
                            (() => {
                                const fullName: string[]  = user.fullName.split(" ")
                                return fullName[0][0] + fullName[1][0]
                            })()
                        }
                    </span>
	                <p>{user.fullName}</p>
                </div>}
            </div>
        </aside>
        <div className={'flex-1'}>
            <header className={'w-full flex  dark:bg-[#0f0f14] px-4 items-center text-2xl h-[77px] border-b border-r border-white/10'}>
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="md:hidden p-2 hover:bg-white/5 rounded-lg"
                >
                    <LuMenu className="w-5 h-5" />
                </button>
                {location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)}
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>)
}

export default Layout