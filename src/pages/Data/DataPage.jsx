import { Rating } from "@mui/material"
import Balance from "../../components/Balance"
import { ChevronDown, Filter, RefreshCcw, Search } from "lucide-react"

const DataPage = () => {
    const data = [
        {
            id: 1,
            name: "Murad Balayev",
            age: "28",
            gender: 'Male',
            lastOrder: [
                'Cappuccino',
                'Espresso',
                'Latte'
            ],
            mostBuy: 'Americano',
            rating: <Rating
                name="read-only"
                value={4}
                readOnly
            />,
            overallRating: <Rating
                name="read-only"
                value={4}
                readOnly
            />,
            most: 'Coffee Shop'

        },
        {
            id: 2,
            name: "Ali Aghayev",
            age: "25",
            gender: "Male",
            lastOrder: 'Cappuccino',
            mostBuy: 'Americano',
            rating: <Rating
                name="read-only"
                value={5}
                readOnly
            />,
            overallRating: <Rating
                name="read-only"
                value={4}
                readOnly
            />,
            most: 'Coffee Shop'

        },
        {
            id: 3,
            name: "Mirsaleh Aliyev",
            age: "25",
            gender: 'Male',
            lastOrder: 'Cappuccino',
            mostBuy: 'Americano',
            rating: <Rating
                name="read-only"
                value={4}
                readOnly
            />,
            overallRating: <Rating
                name="read-only"
                value={4}
                readOnly
            />,
            most: 'Coffee Shop'

        },
        {
            id: 4,
            name: "Camal Cemilov",
            age: "20",
            gender: 'Male',
            lastOrder: 'Cappuccino',
            mostBuy: 'Americano',
            rating: <Rating
                name="read-only"
                value={4}
                readOnly
            />,
            overallRating: <Rating
                name="read-only"
                value={4}
                readOnly
            />,
            most: 'Coffee Shop'

        },
        {
            id: 5,
            name: "Kamal Abdullayev",
            age: "19",
            gender: 'Male',
            lastOrder: 'Cappuccino',
            mostBuy: 'Americano',
            rating: <Rating
                name="read-only"
                value={5}
                readOnly
            />,
            overallRating: <Rating
                name="read-only"
                value={4}
                readOnly
            />,
            most: 'Coffee Shop'

        }
    ]

    return (
        <div className="wrapper wallet pb-8">
            <header className="header gap-4">
                <h1 className="header-title">Data</h1>
                <Balance />
            </header>
            <main className="md:mt-8 mt-12 overflow-auto flex flex-col poppins">
                <div className="w-full flex lg:flex-row flex-col lg:items-center justify-start  gap-2 mb-6">
                    <div className="relative flex items-center">
                        <Search className="absolute top-1/2 transform -translate-y-1/2 left-4" size={20} color="gray" />
                        <input
                            className="md:min-w-40 max-w-48 outline-none text-sm py-3 ps-12 pe-2 border border-gray-400 rounded-3xl" />
                    </div>
                    <div className="lg:min-w-[700px] min-w-[900px] h-12 whitespace-wrap border border-gray-400 rounded-xl flex justify-between items-center">
                        <div className="border-r flex items-center justify-center border-gray-300 h-full p-3">
                            <Filter color="gray" size={20} />
                        </div>
                        <div className="border-r flex items-center justify-center border-gray-300 h-full px-4 py-3">
                            <p className="text-sm text-gray-400 ">Filter By</p>
                        </div>
                        <div className="border-r flex items-center justify-center border-gray-300 h-full px-8 py-3">
                            <p className="text-sm text-gray-700">01 Sep 2024</p> <ChevronDown size={20} />
                        </div>
                        <div className="border-r flex items-center justify-center border-gray-300 h-full px-8 py-3">
                            <p className="text-sm text-gray-700 ">Rating</p> <ChevronDown size={20} />
                        </div>
                        <div className="border-r flex gap-2 items-center justify-center border-gray-300 text-red-600 h-full px-8 py-3">
                            <RefreshCcw size={17} /> <p className="text-sm">Reset Filter</p>
                        </div>
                        <div className="flex items-center justify-center border-gray-300 h-full px-10 py-3">
                            <p className="text-sm text-green-500 ">Export As CVS</p>
                        </div>
                    </div>
                </div>
                <table className="min-w-[900px]">
                    <thead>
                        <tr>
                            <th>Name, Surname</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Last Order</th>
                            <th>Most Buy</th>
                            <th>Rating</th>
                            <th>Overall Rating</th>
                            <th>Most Going Coffee Shop</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="whitespace-nowrap">{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>
                                {Array.isArray(item.lastOrder) ? (
                                    <ul className="flex flex-col text-center">
                                        {item.lastOrder.map((order, index) => (
                                            <li key={index}>{order}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    item.lastOrder
                                )}
                                </td>
                                <td>{item.mostBuy}</td>
                                <td>{item.rating}</td>
                                <td>{item.overallRating}</td>
                                <td>{item.most}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default DataPage
