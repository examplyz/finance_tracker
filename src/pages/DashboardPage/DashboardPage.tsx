import DashboardInfo from "../../components/DashboardInfo/DashboardInfo.tsx";
import CatBudInfo from "../../components/CategoriesAndBudgetsInfo.tsx";

const DashboardPage = () => {

    return <div className={'p-4'}>
        <DashboardInfo/>
        <CatBudInfo/>
    </div>
}

export default  DashboardPage