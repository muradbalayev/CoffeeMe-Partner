import { IoVolumeMedium } from "react-icons/io5";
import { BiSolidBellRing } from "react-icons/bi";
import { FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import NotificationModal from "./Modals/NotifyModal";
const Balance = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="balance absolute sm:top-14  sm:right-10 flex items-center md:gap-2 gap-1">
      <IoVolumeMedium
        className="md:w-11 md:h-11 w-9 h-9 border-2 border-black rounded-xl p-1 hover:scale-110 transition duration-300 ease-in-out"
      // size={45}
      />
      <BiSolidBellRing onClick={() => setModalShow(true)}
        className="md:w-11 md:h-11 w-9 h-9 border-2 p-1 border-black rounded-xl hover:scale-110 transition duration-300 ease-in-out"
      // size={45}
      />
      <div className="flex items-center font-semibold gap-3 border-2 border-black rounded-xl py-1 md:px-4 px-2 hover:scale-105 transition duration-300 ease-in-out">
        <FaWallet className="md:w-7 md:h-8 w-6 h-6"
        // size={20} 
        />
        <Link to={'/dashboard/wallet'} className="balance poppins md:text-base text-sm">1270 AZN</Link>
      </div>
      <NotificationModal
        isOpen={modalShow}
        onClose={() => setModalShow(false)}
      />
    </div>
  )
}

export default Balance
