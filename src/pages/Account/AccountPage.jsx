import { FaWallet } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import { HiMiniUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Balance from "../../components/Balance";

const AccountPage = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="header-title">Account</h1>
        <Balance />
      </header>
      <main className="relative flex items-center justify-center sm:mt-0 mt-10 h-full w-full overflow-auto">
        <div className="menu lg:w-[600px] md:w-[450px] w-[400px] grid grid-cols-2 sm:gap-6 gap-3">
          <Link
            to={"/dashboard/menu"}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <AiFillAppstore
              size={60}
              className="text-gray-700 transform group-hover:rotate-12 group-hover:text-green-800 group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
            <h1 className="mt-4 text-gray-800 poppins md:text-2xl text-xl  transition-opacity duration-300">
              Menu
            </h1>
          </Link>
          <Link
            to={"/dashboard/subscribers"}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <HiMiniUsers
              size={60}
              className="text-gray-700 transform group-hover:-rotate-12 group-hover:text-green-800 transition-all duration-500 ease-in-out"
            />
            <h1 className="mt-4 text-gray-800 poppins md:text-2xl text-xl  transition-opacity duration-300">
              Subscribers
            </h1>
          </Link>
          <Link
            to={"/dashboard/wallet"}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <FaWallet
              size={60}
              className="text-gray-700 transform group-hover:rotate-12 group-hover:text-green-800 transition-all duration-500 ease-in-out"
            />
            <h1 className="mt-4 text-gray-800 poppins md:text-2xl text-xl transition-opacity duration-300">
              Wallet
            </h1>
          </Link>
          <Link
            to={"/dashboard/notifications"}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <BiSolidBellRing
              size={60}
              className="text-gray-700 transform group-hover:-rotate-12 group-hover:text-green-800 transition-all duration-500 ease-in-out"
            />
            <h1 className="mt-4 text-gray-800 poppins md:text-2xl text-xl   transition-opacity duration-300">
              Notifications
            </h1>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;
