import {
    ChartCandlestick,
    FolderClosed,
    History,
    LogOut,
    MapPinMinusInside,
    MessageSquareMore,
    ShoppingCart,
    User2,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useCallback, useEffect, useRef } from "react";

const Sidebar = ({  isMobileOpen, setIsMobileOpen, menuButtonRef }) => {
    const navigate = useNavigate();
    const mobileSidebarRef = useRef(null);

    const handleClickOutside = useCallback(
        (event) => {
            if (
                mobileSidebarRef.current &&
                !mobileSidebarRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setIsMobileOpen(false);
            }
        },
        [setIsMobileOpen, menuButtonRef]
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    const SIDEBARITEMS = [
        {
            id: 1,
            title: "Orders",
            icon: <ShoppingCart size={20} />,
            path: "/dashboard",
        },
        {
            id: 2,
            title: "Account",
            icon: <User2 size={20} />,
            path: "/dashboard/account",
        },
        {
            id: 3,
            title: "History",
            icon: <History size={20} />,
            path: "/dashboard/history",
        },
        {
            id: 4,
            title: "Sales Report",
            icon: <ChartCandlestick size={20} />,
            path: "/dashboard/sales-report",
        },
        {
            id: 5,
            title: "Data",
            icon: <FolderClosed size={20} />,
            path: "/dashboard/data",
        },
        {
            id: 6,
            title: "Map",
            icon: <MapPinMinusInside size={20} />,
            path: "/dashboard/map",
        },
        {
            id: 7,
            title: "Support",
            icon: <MessageSquareMore size={20} />,
            path: "/dashboard/support",
        },
    ];

    const handleLogout = () => {
        navigate("/");
        setIsMobileOpen(false);
    };

    return (
        <>
            <div className='sidebar md:min-w-52 sm:min-w-40 sm:flex hidden relative'>
                <div className="w-full flex flex-col gap-3 items-center justify-start">
                    <div className="profile-img flex bg-gray-100 rounded-full transition duration-300 sm:p-5 p-3">
                        <FaUser color="gray" size={50} />
                    </div>
                    <h3 className="poppins text-sm text-center">Coffee Shop Name</h3>
                </div>
                <div className="divider w-12 mx-auto bg-gray-300 h-[1px]"></div>
                <nav className="links overflow-auto mb-4">
                    {SIDEBARITEMS.map((item) => (
                        <NavLink
                            key={item.id}
                            className="link md:text-sm text-xs"
                            to={item.path}
                            end
                        >
                            {item.icon}
                            <p> {item.title}</p>
                        </NavLink>
                    ))}
                </nav>
                <div className="mt-auto mx-auto w-full flex justify-center px-5">
                    <button
                        onClick={handleLogout}
                        className="btn text-sm border border-orange-300 "
                    >
                        <LogOut size={20} />
                        <p>Log Out</p>
                    </button>
                </div>
            </div>
            {/* <div className='overlay z-10 absolute bg-gray-300 w-full h-full '> */}
                <div
                    ref={mobileSidebarRef}
                    className={`mobile-sidebar text-white w-[80%] z-10 opacity-100 sm:hidden items-center justify-start fixed ${isMobileOpen ? "left-0" : "-left-full"
                        }`}
                >
                    <div className="w-full flex flex-col gap-3 items-center justify-start mt-6">
                        <div className="profile-img flex bg-gray-100 rounded-full transition duration-300 sm:p-5 p-3">
                            <FaUser color="gray" size={50} />
                        </div>
                        <h3 className="poppins text-sm text-center">Coffee Shop Name</h3>
                    </div>
                    <nav className="links w-full mt-10 overflow-auto mb-4">
                        {SIDEBARITEMS.map((item) => (
                            <NavLink
                                className="link md:text-sm text-xs"
                                key={item.id}
                                to={item.path}
                                onClick={() => setIsMobileOpen(false)}
                                end
                            >
                                {item.icon}
                                <p>{item.title}</p>
                            </NavLink>
                        ))}
                    </nav>
                    <div className="mx-auto mt-auto mb-10 w-full flex justify-center px-5">
                        <button
                            onClick={handleLogout}
                            className="btn text-sm border border-orange-300 "
                        >
                            <LogOut size={20} />
                            <p>Log Out</p>
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
};

export default Sidebar;
