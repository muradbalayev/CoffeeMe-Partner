import { ChartCandlestick, FolderClosed, History, LogOut, MapPinMinusInside, MessageSquareMore, ShoppingCart,  UserCircle } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"
import { FaUser } from "react-icons/fa6";


const Sidebar = () => {
    const navigate = useNavigate()
    const SIDEBARITEMS = [
        {
            id: 1,
            title: "Orders",
            icon: <ShoppingCart size={20} />,
            path: "/dashboard"
        },
        {
            id: 2,
            title: "Account",
            icon: <UserCircle size={20} />,
            path: "/dashboard/account"
        },
        {
            id: 3,
            title: "History",
            icon: <History size={20} />,
            path: "/dashboard/history"
        },
        {
            id: 4,
            title: "Sales Report",
            icon: <ChartCandlestick size={20} />,
            path: "/dashboard/sales-report"
        },
        {
            id: 5,
            title: "Data",
            icon: <FolderClosed size={20} />,
            path: "/dashboard/data"
        },
        {
            id: 6,
            title: "Map",
            icon: <MapPinMinusInside size={20} />,
            path: "/dashboard/map"
        },
        {
            id: 7,
            title: "Support",
            icon: <MessageSquareMore size={20} />,
            path: "/dashboard/support"
        },
        
    ]

    const handleLogout = () => {
    navigate('/')
    }
    return (
        <div className="sidebar md:min-w-52 min-w-44">
            <div className="w-full flex flex-col gap-3 items-center justify-start">
                <div className='profile-img flex bg-gray-100 rounded-full transition duration-300 p-5'>
                    <FaUser color="gray" size={55} />
                </div>
                <h3 className="poppins text-sm">Coffee Shop Name</h3>
            </div>
            <div className="divider w-12 mx-auto bg-gray-300 h-[1px]"></div>
            <nav className="links overflow-auto mb-6">
                {SIDEBARITEMS.map((item) => (                 
                    <NavLink className='link text-sm' key={item.id} to={item.path} end>
                        {item.icon}
                        <p> {item.title}</p>
                    </NavLink>
                ))}
            </nav>
            <div className="mt-auto mx-auto w-full flex justify-center px-5">
            <button onClick={handleLogout}
            className="btn text-sm border border-orange-300 ">
            <LogOut  size={20} />
                <p >Log Out</p>
            </button>
            </div>
        </div>
    )
}

export default Sidebar
