import AuthPage from "./AuthPage/AuthPage.tsx";
import type {ReactElement} from "react";

interface IPage {
    path: string,
    page: ReactElement,
}

const pages:[IPage] = [
    {
        path:"/auth",
        page: <AuthPage/>
    }
]

export default  pages