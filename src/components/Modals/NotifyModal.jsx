import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { FaBell } from "react-icons/fa";
import { useState } from "react";
import UserModal from "./UserModal";
import goku from "../../assets/goku.jpg";

const NotificationModal = ({ isOpen, onClose }) => {

    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        {
            id: 1,
            name: "Murad Balayev",
            age: 22,
            gender: "Male",
            photo:  goku 
        },
        {
            id: 2,
            name: "Ali Aghayev",
            age: 25,
            gender: "Male",
            photo: "https://ychef.files.bbci.co.uk/1280x720/p0cr3znc.jpg"
        },
        {
            id: 3,
            name: "Mirsaleh Aliyev",
            age: 25,
            gender: "Male",
            photo: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQVvw9wM-vic6DpsytCKxIPryMNkHemJMjGyWfxL4Mu4Q7giMB9AbbMgQFRMdygvAj-xxNDjKnzL_iG9cc' // Leonardo DiCaprio
        },
        {
            id: 4,
            name: "Alice Johnson",
            age: 25,
            gender: "Female",
            photo: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Meryl_Streep_2016.jpg' // Meryl Streep
        },
        {
            id: 5,
            name: "Michael Brown",
            age: 25,
            gender: "Male",
            photo: 'https://upload.wikimedia.org/wikipedia/en/4/47/Robert_Downey_Jr._in_2014.jpg' // Robert Downey Jr.
        },
        {
            id: 6,
            name: "Sarah Davis",
            age: 25,
            gender: "Female",
            photo: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Emma_Stone_%282018%29.jpg' // Emma Stone
        },
        {
            id: 7,
            name: "David Wilson",
            age: 25,
            gender: "Male",
            photo: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Will_Smith_in_2016.jpg' // Will Smith
        },
        {
            id: 8,
            name: "Emily Taylor",
            age: 25,
            gender: "Female",
            photo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Jennifer_Lawrence_at_the_2013_Screen_Actors_Guild_Awards_%28cropped%29.jpg' // Jennifer Lawrence
        },
        {
            id: 9,
            name: "Daniel Anderson",
            age: 25,
            gender: "Male",
            photo: 'https://upload.wikimedia.org/wikipedia/en/6/68/Tom_Hanks_2014.jpg' // Tom Hanks
        },
        {
            id: 10,
            name: "Olivia Martinez",
            age: 25,
            gender: "Female",
            photo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Alicia_Vikander_in_2015.jpg' // Alicia Vikander
        }
    ];


    const handleSelectUser = (user) => {
        setSelectedUser(user);
    }

    return (
        <Modal open={isOpen} onClose={onClose} center>
            <div className="md:p-12 sm:p-8 p-4 ">
                <div className="text-center my-3 md:mb-0">
                    <h1 className="poppins md:text-3xl text-2xl">Recent Notifications</h1>
                    <div className="mt-4 overflow-auto max-h-96">
                        {users.map((user) => (
                            <div onClick={() => handleSelectUser(user)} key={user.id} className="poppins cursor-pointer flex items-center flex-start gap-2 my-2 bg-[#EFEFEF] rounded-xl pe-5">
                                <FaBell size={40} color="white" className="p-3 bg-[#00704A] rounded-xl" />
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
