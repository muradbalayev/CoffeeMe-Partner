import { FaWallet } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import { HiMiniUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Balance from "../../components/Balance";

const AccountPage = () => {
  return (
    <div className="wrapper">
      <header className="header ">
        <h1 className="header-title">Account</h1> 
        <Balance/>
      </header>
      <div className="relative flex items-center h-full w-full overflow-auto">
        <div className="menu lg:w-[600px] md:w-[450px] sm:w-[300px] w-[200px] mx-auto flex flex-wrap">
          <Link to={"/dashboard/menu"} className="group flex items-center justify-center lg:w-[300px] md:w-[225px] sm:w-[150px] w-[100px] border border-gray-500 border-t-0 border-l-0">
            <div className="group-hover:text-green-800 transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
              <AiFillAppstore size={50} />
              <h1 className="poppins md:text-2xl sm:text-xl cursor-pointer">Menu</h1>
            </div>
          </Link>
          <Link to={"/dashboard/subscribers"} className="group flex flex-col justify-center items-center lg:w-[300px] md:w-[225px] sm:w-[150px] w-[100px] border border-gray-500 border-t-0 border-r-0">
            <div className="group-hover:text-green-800 transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
              <HiMiniUsers size={50} />
              <h1 className="poppins md:text-2xl sm:text-xl cursor-pointer">Subscribers</h1>
            </div>
          </Link>
          <Link to={"/dashboard/wallet"} className="group flex flex-col justify-center items-center lg:w-[300px] md:w-[225px] sm:w-[150px] w-[100px] border border-gray-500 border-l-0 border-b-0">
            <div className="group-hover:text-green-800 transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
              <FaWallet size={50} />
              <h1 className="poppins md:text-2xl sm:text-xl cursor-pointer">Wallet</h1>
            </div>
          </Link>
          <Link to={"/dashboard/notifications"} className="group flex flex-col justify-center items-center lg:w-[300px] md:w-[225px] sm:w-[150px] w-[100px] border border-gray-500 border-b-0 border-r-0">
            <div className="group-hover:text-green-800 transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
              <BiSolidBellRing size={50} />
              <h1 className="poppins md:text-2xl sm:text-xl cursor-pointer">Notification</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
