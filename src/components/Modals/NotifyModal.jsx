import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { FaBell } from "react-icons/fa";

const NotificationModal = ({ isOpen, onClose }) => {

    const users = [
        {
            id: 1,
            name: "John Doe",
        },
        {
            id: 2,
            name: "Jane Doe",
        },
        {
            id: 3,
            name: "Bob Smith",
        },
        {
            id: 4,
            name: "Alice Johnson",
        },
        {
            id: 5,
            name: "Michael Brown",
        },
        {
            id: 6,
            name: "Sarah Davis",
        },
        {
            id: 7,
            name: "David Wilson",
        },
        {
            id: 8,
            name: "Emily Taylor",
        },
        {
            id: 9,
            name: "Daniel Anderson",
        },
        {
            id: 10,
            name: "Olivia Martinez",
        }

    ]

    return (
        <Modal open={isOpen} onClose={onClose} center>
            <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
                <div className="text-center my-3 md:mb-0">
                    <h1 className="poppins md:text-3xl text-2xl">Recent Notifications</h1>
                    <div className="mt-4 overflow-auto max-h-96">
                        {users.map((user) => (
                            <div key={user.id} className="poppins flex items-center flex-start gap-2 my-2 bg-[#EFEFEF] rounded-xl pe-5">
                                <FaBell size={40} color="white" className="p-3 bg-[#00704A] rounded-xl"/>
                                <p className="text-sm"> <span className="text-[#00704A] font-semibold"> {user.name}</span> has entered your CoffeeShop</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default NotificationModal;
