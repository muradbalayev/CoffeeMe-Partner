import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import AccountPage from "./Account/AccountPage"
import OrderPage from "./Orders/OrderPage"
import Balance from "../components/Balance"
import MenuPage from "./Menu/MenuPage"
import SubscribersPage from "./Subscribers/SubscribersPage"


const Dashboard = () => {
  return (
    <div className="flex h-full overflow-hidden max-w-[1920px] mx-auto">
      <Sidebar />
      <Balance />
      <Routes>
        <Route path='/' element={<OrderPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/menu' element={<MenuPage/>} />
        <Route path="/subscribers" element={<SubscribersPage />} />
      </Routes>
    </div>
  )
}

export default Dashboard
