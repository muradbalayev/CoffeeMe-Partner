import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/Login/LoginPage"
import Dashboard from "../pages/Dashboard"

const Router = () => {
  return (
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<LoginPage />}/>
    <Route path="/dashboard/*" element={<Dashboard />}/>
 </Routes>
 </BrowserRouter>
  )
}

export default Router
