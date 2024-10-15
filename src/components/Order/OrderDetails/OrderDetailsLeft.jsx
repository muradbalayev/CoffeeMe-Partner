import { useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const OrderDetailsLeft = ({ order }) => {
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(0);

  const handleOrderChange = (index) => {
    if (index === selectedOrderIndex) return;

    // Use gsap.context to handle animations properly within the component's lifecycle
    const ctx = gsap.context(() => {
      // Animate current order out (fading out and sliding down)
      gsap.to("#order", {
        opacity: 0,
        y: 50, 
        duration: 0.6,
        ease: 'power3.inOut',
        onComplete: () => {
          setSelectedOrderIndex(index);

          // Animate the new order coming in with a smooth bounce effect
          gsap.fromTo(
            "#order",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.75)' }
          );
        },
      });
    });

    return () => ctx.revert(); // Cleanup when the component unmounts
  };

  useGSAP(() => {
    // Initial load animation with a slight delay
    gsap.fromTo(
      "#order",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.75)', delay: 0.2 }
    );
  }, []);

  return (
    <div className="order-details__left md:mb-0 mb-5 md:w-1/2 w-full">
      <div className="flex flex-col gap-2 w-full border-r border-gray-300">
        <h3 className="poppins max-w-40 pt-4 font-medium md:text-3xl text-2xl">
          Order #{order.orderId}
        </h3>
        <div className="divider md:my-5 my-3 w-20 border-b border-gray-300"></div>

        {/* Animated order details */}
        <div className='flex w-full justify-between pr-6'>

        <div id='order' className="order-info max-h-40 overflow-auto">
          <div className="w-3/4 flex justify-between items-center gap-4">
            <h4>Number</h4>
            <div className="text-left w-32">
              <p className="font-semibold">{order.orders[selectedOrderIndex].number}x</p>
            </div>
          </div>
          <div className="w-3/4 flex justify-between items-center gap-4">
            <h4>Coffee</h4>
            <div className="text-left w-32">
              <p className="font-semibold">{order.orders[selectedOrderIndex].coffee}</p>
            </div>
          </div>
          <div className="w-3/4 flex justify-between items-center gap-4">
            <h4>Size</h4>
            <div className="text-left w-32">
              <p className="font-semibold">{order.orders[selectedOrderIndex].size}</p>
            </div>
          </div>
          <div className="w-3/4 flex justify-between items-center gap-4">
            <h4>Type</h4>
            <div className="text-left w-32">
              <p className="font-semibold">{order.orders[selectedOrderIndex].type}</p>
            </div>
          </div>
          <div className="w-3/4 flex justify-between items-center gap-4">
            <h4>Price</h4>
            <div className="text-left w-32">
              <p className="font-semibold">{order.orders[selectedOrderIndex].price} AZN</p>
            </div>
          </div>
        </div>

        {/* Buttons to switch orders */}
        <div className="flex flex-col justify-center gap-2 pt-4">
          {order.orders.map((_, index) => (
            <button
              key={index}
              onClick={() => handleOrderChange(index)}
              className={`w-3  ${selectedOrderIndex === index ? 'bg-gray-600 h-10' : 'bg-gray-400 h-5'} rounded-full text-xs transition-all duration-300`}
              >
              {/* {index + 1} */}
            </button>
          ))}
        </div>
          </div>

        <div className="divider md:my-5 my-3 w-20 border-t border-gray-300"></div>

        <div className="comment-container flex flex-col gap-3 overflow-auto me-4">
          <h4 className="max-w-32 text-sm pb-4">Comment</h4>
          <h4 className="max-w-96 pb-2 me-4 border-b border-gray-300">
            {order.comment}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsLeft;
