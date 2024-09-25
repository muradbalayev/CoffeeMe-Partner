import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { FaBell } from "react-icons/fa";
import { useState } from "react";
import UserModal from "./UserModal";

const NotificationModal = ({ isOpen, onClose }) => {

    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        {
            id: 1,
            name: "Murad Balayev",
            age: 22,
            gender: "Male",
        },
        {
            id: 2,
            name: "Ali Aghayev",
            age: 25,
            gender: "Male",
        },
        {
            id: 3,
            name: "Bob Smith",
            age: 25,
            gender: "Male",
        },
        {
            id: 4,
            name: "Alice Johnson",
            age: 25,
            gender: "Male",
        },
        {
            id: 5,
            name: "Michael Brown",
            age: 25,
            gender: "Male",
        },
        {
            id: 6,
            name: "Sarah Davis",
            age: 25,
            gender: "Male",
        },
        {
            id: 7,
            name: "David Wilson",
            age: 25,
            gender: "Male",
        },
        {
            id: 8,
            name: "Emily Taylor",
            age: 25,
            gender: "Male",
        },
        {
            id: 9,
            name: "Daniel Anderson",
            age: 25,
            gender: "Male",
        },
        {
            id: 10,
            name: "Olivia Martinez",
            age: 25,
            gender: "Male",
        }

    ]

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    }

    return (
        <Modal open={isOpen} onClose={onClose} center>
            <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
                <div className="text-center my-3 md:mb-0">
                    <h1 className="poppins md:text-3xl text-2xl">Recent Notifications</h1>
                    <div  className="mt-4 overflow-auto max-h-96">
                        {users.map((user) => (
                            <div onClick={() => handleSelectUser(user)} key={user.id} className="poppins cursor-pointer flex items-center flex-start gap-2 my-2 bg-[#EFEFEF] rounded-xl pe-5">
                                <FaBell size={40} color="white" className="p-3 bg-[#00704A] rounded-xl"/>
                                <p className="text-sm"> <span className="text-[#00704A] font-semibold"> {user.name}</span> has entered your CoffeeShop</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedUser && (
                <UserModal 
                    isOpen={!!selectedUser} 
                    onClose={() => setSelectedUser(null)} // Close the modal
                    user={selectedUser} // Pass selected user to the UserModal
                />
            )}        </Modal>
    );
};

export default NotificationModal;
