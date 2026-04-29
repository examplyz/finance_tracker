import type {MouseEvent, ReactNode} from "react";

interface IButtonProps {
    children: ReactNode,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean
}


const Button = ({children , onClick , disabled = false}: IButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled} className="bg-violet-500 hover:bg-violet-600 justify-center text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            {children}
        </button>
    )
}

export default Button