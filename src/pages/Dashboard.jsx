import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import AccountPage from "./Account/AccountPage"
import OrderPage from "./Orders/OrderPage"
import MenuPage from "./Menu/MenuPage"
import SubscribersPage from "./Subscribers/SubscribersPage"
import SalesReportPage from "./SalesReport/SalesReportPage"
import NotificationPage from "./Notification/NotificationPage"
import WalletPage from "./Wallet/WalletPage"
import WithdrawPage from "./Withdraw/WithdrawPage"
import HistoryPage from "./History/HistoryPage"
import DataPage from "./Data/DataPage"
import MapPage from "./Map/MapPage"
import SupportPage from "./Support/SupportPage"


const Dashboard = () => {
  return (
    <div className="flex h-full overflow-hidden max-w-[1920px] mx-auto">
      <Sidebar />
      <Routes>
        <Route path='/' element={<OrderPage />} />

        <Route path='/account' element={<AccountPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path="/subscribers" element={<SubscribersPage />} />
        <Route path='/sales-report' element={<SalesReportPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </div>
  )
}

export default Dashboard
