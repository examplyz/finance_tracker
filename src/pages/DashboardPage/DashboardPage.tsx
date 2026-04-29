import DashboardInfo from "../../components/DashboardInfo/DashboardInfo.tsx";
import CategoriesInfo from "../../components/CategoryInfo/CategoriesInfo.tsx";

const DashboardPage = () => {

    return <div className={'p-4'}>
        <DashboardInfo/>
        <CategoriesInfo/>
    </div>
}

export default  DashboardPage