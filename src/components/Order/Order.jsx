import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import OrderDetailsLeft from "./OrderDetails/OrderDetailsLeft";
import OrderDetailsRight from "./OrderDetails/OrderDetailsRight";

const Order = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="order-container pb-8 w-full px-8 mt-8">
      <div className="order cursor-pointer" onClick={toggleDropdown}>
        <div className="order-number py-4 border-r border-gray-300 w-1/3">
          <h1 className="poppins font-medium text-3xl">
            Order #{order.orderId}
          </h1>
        </div>
        <div className="w-2/3 pl-8 flex items-center justify-between">
          <div className="customer poppins flex gap-2">
            <span>Müştəri</span>
            <h3 className="text-2xl font-medium">{order.customerName}</h3>
          </div>
          {isOpen ? (
            <ChevronDown size={30} color="gray" className="button" />
          ) : (
            <ChevronUp size={30} color="gray" className="button" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="order-details min-h-80">
          <ChevronUp
            onClick={toggleDropdown}
            size={30}
            color="gray"
            className="button absolute top-5 right-5"
          />
          <OrderDetailsLeft order={order}/>
          <OrderDetailsRight order={order}/>
        </div>
      )}
    </div>
  );
};

export default Order;
