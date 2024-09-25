import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { Avatar } from "@mui/material";

const UserModal = ({ isOpen, onClose, user }) => {

  return (
    <Modal open={isOpen} onClose={onClose} center>
      <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
        <div className="flex flex-col gap-2 text-center my-3 md:mb-0">
          <h1 className="poppins md:text-3xl text-2xl">User information</h1>
          <div className="mt-4 w-full overflow-auto flex flex-col items-center justify-center">
            <Avatar alt="Remy Sharp" src={user.image} sx={{ width: 100, height: 100 }} />
            <p className="text-xl mt-3 font-bold"> {user.name} </p>
            <div className="poppins shadow-md w-full mt-10 flex flex-col items-start font-semibold justify-center gap-2 my-2 bg-[#d0cfcf] rounded-lg px-4 py-2">
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
