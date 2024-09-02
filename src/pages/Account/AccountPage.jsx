import { IoVolumeMedium } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import { HiMiniUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AccountPage = () => {
  return (
    <div className="wrapper">
      <header className="header flex items-center justify-between">
        <h1 className="header-title">Account</h1>
        <div className="flex gap-3 ">
          <IoVolumeMedium
            className="border-2 border-black rounded-lg p-2 hover:scale-110 transition duration-300 ease-in-out"
            size={50}
          />
          <BiSolidBellRing
            className="border-2 border-black rounded-lg p-3 hover:scale-110 transition duration-300 ease-in-out"
            size={50}
          />
          <div className="flex items-center font-semibold gap-3 border-2 border-black rounded-lg py-2 px-4 hover:scale-105 transition duration-300 ease-in-out">
            <FaWallet size={20} />
            <p className="balance poppins">1270 AZN</p>
          </div>
        </div>
      </header>
      <main className="relative flex items-center justify-center h-full w-full">
        <div className="menu w-[600px] flex flex-wrap">
          <Link className="group  flex items-center justify-center w-[300px] border border-gray-500 border-t-0 border-l-0 h-52">
            <div className="group-hover:text-green-800 transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
              <AiFillAppstore size={60} />
              <h1 className="poppins text-2xl cursor-pointer">Menu</h1>
            </div>
          </Link>
          <Link className="group flex flex-col justify-center items-center w-[300px] border border-gray-500 border-t-0 border-r-0 h-52">
            <div className="group-hover:text-green-800 transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
              <HiMiniUsers size={60} />
              <h1 className="poppins text-2xl cursor-pointer">Subscribers</h1>
            </div>
          </Link>
          <Link className="group flex flex-col justify-center items-center w-[300px] border border-gray-500 border-l-0 border-b-0 h-52">
            <div className="group-hover:text-green-800 transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
              <FaWallet size={60} />
              <h1 className="poppins text-2xl cursor-pointer">Wallet</h1>
            </div>
          </Link>
          <Link className="group flex flex-col justify-center items-center w-[300px] border border-gray-500 border-b-0 border-r-0 h-52">
            <div className="group-hover:text-green-800 transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
              <BiSolidBellRing size={60} />
              <h1 className="poppins text-2xl cursor-pointer">Notification</h1>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;
