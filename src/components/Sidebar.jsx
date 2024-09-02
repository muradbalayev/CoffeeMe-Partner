import { ChartArea, FolderClosed, History, LogOut, MapPinMinusInside, MessageSquareMore, ShoppingCart, User, UserCircle } from "lucide-react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    const SIDEBARITEMS = [
        {
            id: 1,
            title: "Orders",
            icon: <ShoppingCart size={20} />,
            path: "/dashboard/orders"
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
            icon: <ChartArea size={20} />,
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

    return (
        <div className="sidebar w-52">
            <div className="w-full flex flex-col gap-3 items-center justify-start">
                <div className='profile-img bg-gray-300 rounded-full transition duration-300 p-6'>
                    <User size={45} />
                </div>
                <h3 className="poppins text-sm">Coffee Shop Name</h3>
            </div>
            <div className="relative w-12 mx-auto bg-gray-300 h-[1px]"></div>
            <nav className="links overflow-auto">
                {SIDEBARITEMS.map((item) => (                 
                    <NavLink className='link text-sm' key={item.id} to={item.path}>
                        {item.icon}
                        <p> {item.title}</p>
                    </NavLink>
                ))}
            </nav>
            <div className="mt-auto mx-auto w-full flex justify-center px-5">
            <button className="btn text-sm border border-orange-300 ">
            <LogOut className="text-orange-300" size={20} />
                <h3 className="text-orange-300">Log Out</h3>
            </button>
            </div>
        </div>
    )
}

export default Sidebar
