import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import OrderDetailsLeft from "./OrderDetails/OrderDetailsLeft";
import OrderDetailsRight from "./OrderDetails/OrderDetailsRight";

const Order = ({ order }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAccept, setIsAccept] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null); // State to track selected time
    const [buttonState, setButtonState] = useState("Preparing"); // Manage button state
    const [isModalOpen, setIsModalOpen] = useState(false); 


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setButtonState("Ready");
    };

    const handleButtonClick = () => {
        if (buttonState === "Ready") {
            setButtonState("Deliver");
        } else if (buttonState === "Deliver") {
            setIsModalOpen(true); // Show success modal
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div className="order-container pb-4 w-full">
            <div className={`order cursor-pointer ${isOpen ? "rounded-t-3xl bg-gray-300" : "rounded-3xl"}`} onClick={toggleDropdown}>
                <div className="order-number py-4 border-r border-gray-300 w-1/3">
                    <h1 className="poppins font-medium md:text-3xl text-xl">
                        Order #{order.orderId}
                    </h1>
                </div>
                <div className="w-2/3 md:pl-8 pl-2 flex items-center justify-between">
                    <div className="customer poppins flex gap-2">
                        <span className="md:text-base text-sm">Müştəri</span>
                        <h3 className="md:text-2xl text-lg font-medium">{order.customerName}</h3>
                    </div>
                    {isOpen ? (
                        <ChevronDown size={30} color="gray" className="button" />
                    ) : (
                        <ChevronUp size={30} color="gray" className="button" />
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="order-details overflow-auto md:max-h-[600px] max-h-[450px]">
                    <ChevronUp
                        onClick={toggleDropdown}
                        size={30}
                        color="gray"
                        className="button absolute top-5 right-5"
                    />
                    <div className="flex flex-col w-full">
                        <div className="flex md:flex-row flex-col w-full">
                            <OrderDetailsLeft order={order} />
                            <OrderDetailsRight order={order} />
                        </div>
                        {isAccept ? (
                            selectedTime ? (
                                // Show the "Ready" button and selected time
                                <div className='order-footer flex w-full'>
                                    <div className="order-footer-left w-full actions py-5 lg:px-10 px-5 mt-4 flex lg:flex-row flex-col">
                                        <button onClick={handleButtonClick}
                                            className="button-accept lg:text-lg text-base lg:py-3 lg:px-8 py-2 px-6">
                                            {buttonState}
                                        </button>
                                    </div>
                                    <div className="order-footer-right w-full mt-auto mb-4 flex lg:flex-row flex-col gap-3 justify-around items-center">
                                        <div className="order-time w-20 h-20 border-4 rounded-full flex flex-col justify-center items-center border-green-800">
                                            <h4 className="font-semibold text-3xl">{selectedTime}</h4>
                                            <p className="text-xs">min</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Show the time selection buttons
                                <div className='order-footer flex w-full'>
                                    <div className="order-footer-left w-full actions py-5 lg:px-10 px-5 mt-4 flex lg:flex-row flex-col">
                                        <button
                                            className="button-accept lg:text-lg text-base lg:py-3 lg:px-8 py-2 px-4">
                                            Preparing
                                        </button>
                                    </div>
                                    <div className="order-footer-right w-full mt-auto mb-4 flex lg:flex-row flex-col gap-3 justify-around items-center">
                                        <div className="order-time flex md:flex-row flex-col items-center gap-3">
                                            <p className="md:text-base text-sm leading-4">Hazır olacağı <br />müddət (dəqiqə)</p>
                                            <div className="time-card flex flex-wrap items-center gap-2">
                                                <button onClick={() => handleTimeSelect(5)} className="font-semibold md:py-4 md:px-9 py-2 px-5 border border-gray-300 rounded-xl">5</button>
                                                <button onClick={() => handleTimeSelect(10)} className="font-semibold md:py-4 md:px-8 py-2 px-4 border border-gray-300 rounded-xl">10</button>
                                                <button onClick={() => handleTimeSelect(15)} className="font-semibold md:py-4 md:px-8 py-2 px-4 border border-gray-300 rounded-xl">15</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ) : (
                            // Show the "Accept" and "Cancel" buttons
                            <div className='order-footer flex w-full'>
                                <div className="order-footer-left w-full actions py-5 lg:px-10 px-5 mt-4 flex lg:flex-row flex-col">
                                    <button
                                        onClick={() => setIsAccept(true)}
                                        className="button-accept lg:text-lg text-base lg:py-3 lg:px-8 py-2 px-6">
                                        Accept
                                    </button>
                                    <button className="button-cancel lg:text-lg text-base lg:py-3 lg:px-8 py-2 px-6">
                                        Cancel
                                    </button>
                                </div>
                                <div className="order-footer-right w-full mt-auto mb-4 flex lg:flex-row flex-col gap-3 justify-around items-center ">
                                    <div className="order-price flex gap-1">
                                        <p className="md:text-xl text-lg leading-4">Total</p>
                                        <h4 className="md:text-3xl text-2xl">{order.price} AZN</h4>
                                    </div>
                                    <div className="order-time md:w-20 md:h-20 w-16 h-16 border-4 rounded-full flex flex-col justify-center items-center border-green-800">
                                        <h4 className="font-semibold md:text-3xl text-2xl">{order.timeLeft}</h4>
                                        <p className="text-xs">min</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {isModalOpen && (
                            <div className="modal fixed z-30 inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-bold mb-4">Success!</h2>
                                    <p>The order has been delivered.</p>
                                    <button
                                        onClick={closeModal}
                                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Order;