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
   
  </div>
  )
}

export default OrderDetailsRight
