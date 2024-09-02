import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import AccountPage from "./Account/AccountPage"
import OrderPage from "./Orders/OrderPage"

const Dashboard = () => {
  return (
    <div className="flex h-full overflow-hidden max-w-[1920px] mx-auto">
      <Sidebar/>
      <Routes>
      <Route path='/' element={<OrderPage/>} />
      <Route path='/account' element={<AccountPage/>} />
      </Routes>
    </div>
  )
}

export default Dashboard
