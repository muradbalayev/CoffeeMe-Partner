import { IoVolumeMedium } from "react-icons/io5";
import { FaWallet } from "react-icons/fa"
import { BiSolidBellRing } from "react-icons/bi";


const AccountPage = () => {
    return (
        <div className="wrapper">
            <header className="header flex items-center justify-between">
                <h1 className="header-title">
                    Account
                </h1>
                <div className="flex gap-3 ">
                    <IoVolumeMedium className="border-2 border-black rounded-lg p-2 hover:scale-110 transition duration-300 ease-in-out" size={50} />
                    <BiSolidBellRing className="border-2 border-black rounded-lg p-3 hover:scale-110 transition duration-300 ease-in-out" size={50} />
                    <div className="flex items-center font-semibold gap-3 border-2 border-black rounded-lg py-2 px-4 hover:scale-105 transition duration-300 ease-in-out">
                    <FaWallet size={20} />
                    <p className="balance poppins">1270 AZN</p>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default AccountPage
