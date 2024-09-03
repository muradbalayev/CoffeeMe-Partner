
const OrderDetailsLeft = ({order}) => {
  return (
    <div className="order-details__left">
    <div className="flex flex-col gap-2 w-full border-r border-gray-300">
      <h3 className="poppins max-w-40 pt-4 font-medium text-3xl">
        Order #{order.orderId}
      </h3>
      <div className="divider my-5 w-20 border-b border-gray-300"></div>
      <div className="order-info max-h-40 overflow-auto">
        <div className="w-3/4 flex justify-between items-center gap-4">
          <h4>Number</h4>
          <div className="text-left w-32">
            <p className="font-semibold">{order.number}x</p>
          </div>{" "}
        </div>
        <div className="w-3/4 flex justify-between items-center gap-4">
          <h4>Coffee</h4>
          <div className="text-left w-32">
            <p className="font-semibold">{order.coffee}</p>
          </div>{" "}
        </div>
        <div className="w-3/4 flex justify-between items-center gap-4">
          <h4>Size</h4>
          <div className="text-left w-32">
            <p className="font-semibold">{order.size}</p>
          </div>{" "}
        </div>
        <div className="w-3/4 flex justify-between items-center gap-4">
          <h4>Type</h4>
          <div className="text-left w-32">
            <p className="font-semibold">{order.type}</p>
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center gap-4">
          <h4>Price</h4>
          <div className="text-left w-32">
            <p className="font-semibold">{order.price} AZN</p>
          </div>
        </div>
      </div>
      <div className="divider my-5 w-20 border-t border-gray-300"></div>

      <div className="comment-container flex flex-col gap-3 overflow-auto me-4">
        <h4 className="max-w-32 text-sm pb-4 ">Comment</h4>
        <h4 className="max-w-96 pb-2 me-4 border-b border-gray-300">
          {order.comment}
        </h4>
      </div>
    </div>
    <div className="actions py-5 lg:px-10 px-5 mt-4 flex lg:flex-row flex-col">
      <button className="button-accept lg:text-lg text-base lg:py-3 lg:px-8 py-2 px-6">
        Accept
      </button>
      <button className="button-cancel lg:text-lg text-base lg:py-3 lg:px-8 py-2 px-6">
        Cancel
      </button>
    </div>
  </div>
  )
}

export default OrderDetailsLeft
