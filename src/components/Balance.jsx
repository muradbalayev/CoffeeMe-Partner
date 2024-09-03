import { IoVolumeMedium } from "react-icons/io5";
import { BiSolidBellRing } from "react-icons/bi";
import { FaWallet } from "react-icons/fa6";
const Balance = () => {
  return (
    <div className="balance absolute top-11 right-10 flex gap-3">
          <IoVolumeMedium
            className="border-2 border-black rounded-xl p-2 hover:scale-110 transition duration-300 ease-in-out"
            size={50}
          />
          <BiSolidBellRing
            className="border-2 border-black rounded-xl p-3 hover:scale-110 transition duration-300 ease-in-out"
            size={50}
          />
          <div className="flex items-center font-semibold gap-3 border-2 border-black rounded-xl py-2 px-4 hover:scale-105 transition duration-300 ease-in-out">
            <FaWallet size={20} />
            <p className="balance poppins">1270 AZN</p>
          </div>
        </div>
  )
}

export default Balance
