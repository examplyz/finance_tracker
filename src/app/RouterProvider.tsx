import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import pages from "../pages/pagesConfiguration.tsx"
import {useAuth} from "./AuthProvider.tsx";
import AuthPage from "../pages/AuthPage/AuthPage.tsx";

const RouterProvider = () => {
    const {user} = useAuth()
    return (
        <BrowserRouter>
            <div className={'max-w-(--breakpoint-xl) mx-auto '}>
            <Routes>
                {user ? pages.map(page => <Route key={page.path} path={page.path}
                    element={page.page}/>) : <Route path={'/auth'} element={<AuthPage/>}/>}
            </Routes>
                {!user && <Navigate to={'/auth'}/>}
            </div>
        </BrowserRouter>
);
};

    export default RouterProvider;