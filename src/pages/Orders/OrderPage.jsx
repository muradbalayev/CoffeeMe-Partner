import Balance from "../../components/Balance"
import Order from "../../components/Order/Order";

const OrderPage = () => {


  const order = {
    orderId: 1,
    customerName: "Emin Baghirov",
    customerId: "12830904",
    number: "1",
    coffee: "Americano",
    type: 'Take away',
    size: "M",
    price: "8.00",
    comment: 'Bol buzlu olsun ',
    age: '22',
    visitCount: '2',
    lastOrder: 'Cappuccino',
    lastOrderTime: '2022-02-22',
    lastOrderRating: '3',
    totalRating: '4',
    timeLeft: "5",
    totalPrice: "10"

  }

  return (
    <div className="wrapper">
      <header className="header flex flex-col gap-4">
        <h1 className="header-title">Orders</h1>
        <Balance />
      </header>
      <main className="mt-2">
        <Order order={order} />
      </main>
    </div>)
}

export default OrderPage
