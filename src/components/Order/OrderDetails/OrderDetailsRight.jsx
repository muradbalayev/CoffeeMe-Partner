import { Rating } from "@mui/material"

const OrderDetailsRight = ({order}) => {
  return (
    <div className="order-details__right">
    <div className="customer flex flex-col">
      <p>User ID: {order.customerId}</p>
      <h3 className="text-3xl font-medium tracking-wide">
        {order.customerName}
      </h3>
    </div>
    <div className="divider my-5 w-20 border-t border-gray-300"></div>
    <div className="order-info max-h-52 overflow-auto">
      <div className="w-3/4 flex justify-between items-center gap-4">
        <h4 className="text-sm">Yaş</h4>
        <div className="text-left w-32">
          <p className="font-medium">{order.age}</p>
        </div>{" "}
      </div>
      <div className="w-3/4 flex justify-between items-center gap-4">
        <h4 className="text-sm">Məkana gəliş sayı</h4>
        <div className="text-left w-32">
          <p className="font-medium">{order.visitCount}</p>
        </div>
      </div>
      <div className="w-3/4 flex justify-between items-center gap-4">
        <h4 className="text-sm">Ən son sifariş</h4>
        <div className="text-left w-32">
          <p className="font-medium">{order.lastOrderTime}</p>
        </div>
      </div>
      <div className="w-3/4 flex justify-between items-center gap-4">
        <h4 className="text-sm">En çox sifariş etdiyi mehsul</h4>
        <div className="text-left w-32">
          <p className="font-medium">{order.lastOrder}</p>
        </div>
      </div>
      <div className="w-3/4 flex justify-between gap-4">
        <h4 className="text-sm">Ən son sifarişin reytingi</h4>
        <div className="text-left w-32">
          <p className="font-medium">
            <Rating
              name="read-only"
              value={order.lastOrderRating}
              readOnly
            />
          </p>
        </div>
      </div>
      <div className="w-3/4 flex justify-between gap-4">
        <h4 className="text-sm">Ümumi reyting</h4>
        <div className="text-left w-32">
          <p className="font-medium">
            <Rating
              name="read-only"
              value={order.totalRating}
              readOnly
            />
          </p>
        </div>
      </div>
    </div>
    <div className="divider mt-5 w-20 border-t border-gray-300"></div>
    <div className="order-footer mt-auto mb-4 flex lg:flex-row flex-col gap-3 justify-around items-center w-full">
      <div className="order-price flex gap-1">
        <p className="text-lg leading-4">Total</p>
        <h4 className="text-3xl">{order.price} AZN</h4>
      </div>
      <div className="order-time w-16 h-16 border-4 rounded-full flex flex-col justify-center items-center border-green-800">
        <h4 className="font-medium text-2xl">{order.timeLeft}</h4>
        <p className="text-xs">min</p>
      </div>
    </div>
  </div>
  )
}

export default OrderDetailsRight
