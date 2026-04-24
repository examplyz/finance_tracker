interface InputProps {
    type?: "password" | "email" | "text" | "file" | "search";
    placeholder: string,
    label?: string,
    value: string,
    changeValue: (value: string) => void,
    error?: string | null,
    autoComplete?: 'new-password' | 'current-password' | 'name',
    isHidden?: boolean
}

const Input = ({type = 'text' , placeholder , label , changeValue , isHidden , value , error , autoComplete} :InputProps) => {
    return (
        <div className={'flex flex-col gap-2' + (isHidden && " hidden")}>
            {label && <label className={'text-md text-white font-light'}>{label}</label>}
            <input  autoComplete={autoComplete} type={type} placeholder={placeholder} value={value} onChange={(e) => changeValue(e.target.value)} className={'w-full bg-[#0f0f14] border border-white/10 rounded-lg  px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50'}/>
            {error && <p className={'text-xs text-red-500'}>{error}</p>}
        </div>
    )
}

export default  Input