import AuthPage from "./AuthPage/AuthPage.tsx";
import DashboardPage from "./DashboardPage/DashboardPage.tsx";
import {type JSX} from "react";

interface IPage {
    path: string,
    page: JSX.Element,
}

const pages:IPage[] = [
    {
        path:"/auth",
        page: <AuthPage/>
    },
    {
        path:"/dashboard",
        page: <DashboardPage/>
    }
]

export default pages