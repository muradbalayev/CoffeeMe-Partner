import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Avatar } from "@mui/material";
import { FiUser } from "react-icons/fi";

const UserModal = ({ isOpen, onClose, user }) => {
  console.log(user.photo)
  return (
    <Modal open={isOpen} onClose={onClose} center>
      <div className="bg-white sm:min-w-[500px] rounded-3xl shadow-2xl md:p-12 sm:p-10 p-8 max-w-md mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="poppins text-3xl font-bold text-gray-800">
            User Information
          </h1>
          <div className="relative">
            <Avatar
              alt={user.name}
              src={user.photo} // Fallback URL if photo is missing
              sx={{
                width: 140,
                height: 140,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                border: "4px solid white",
              }}
            />
            <div className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full border-2 border-white">
              <FiUser className="text-white text-xl" />
            </div>
          </div>
          <p className="text-2xl font-semibold mt-2 text-gray-700">{user.name}</p>
          <div className="w-full bg-gradient-to-br from-[#e4e7ec] to-[#f8fafc] shadow-inner p-6 rounded-xl flex flex-col items-start gap-4 border border-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-600">Age:</span>
              <span className="text-lg text-gray-900">{user.age}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-600">Gender:</span>
              <span className="text-lg text-gray-900">{user.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
