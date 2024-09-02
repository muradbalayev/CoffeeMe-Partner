import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import AccountPage from "./Account/AccountPage"
import OrderPage from "./Orders/OrderPage"
import MenuPage from "./Menu/MenuPage"
import SubscribersPage from "./Subscribers/SubscribersPage"
import SalesReportPage from "./SalesReport/SalesReportPage"


const Dashboard = () => {
  return (
    <div className="flex h-full overflow-hidden max-w-[1920px] mx-auto">
      <Sidebar />
      <Routes>
        <Route path='/' element={<OrderPage />} />

        <Route path='/account' element={<AccountPage />} />

        <Route path='/menu' element={<MenuPage/>} />

        <Route path="/subscribers" element={<SubscribersPage />} />

        <Route path='/sales-report' element={<SalesReportPage />} />
      </Routes>
    </div>
  )
}

export default Dashboard
