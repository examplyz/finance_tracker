import { LuWallet } from "react-icons/lu";

interface ILogoProps {
        logoText: "text-2xl" | "text-4xl";
        nameText: "text-lg" | "text-4xl"
}


const Logo = ({logoText , nameText} : ILogoProps) => {
    return (
        <div className={'dark:text-white flex items-center gap-2'}>
            <div className={'bg-purple-500 p-1.5 rounded-xl text-2xl ' + logoText}>
                <LuWallet/>
            </div>
            <p className={nameText}>FinTrack</p>
        </div>
    )
}

export default  Logo