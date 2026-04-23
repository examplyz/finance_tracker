import {BrowserRouter, Route, Routes} from "react-router";
import pages from "../pages/pagesConfiguration.tsx"

const RouterProvider = () => {
    return (
        <BrowserRouter>
            <div className={'max-w-(--breakpoint-xl) mx-auto '}>
            <Routes>
                {pages.map(page => <Route key={page.path} path={page.path}
                    element={page.page}/>)}
            </Routes>
            </div>
        </BrowserRouter>
);
};

    export default RouterProvider;