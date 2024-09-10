import { Rating } from "@mui/material"
import Balance from "../../components/Balance"
import { ChevronDown, Filter, RefreshCcw } from "lucide-react"

const HistoryPage = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            product: "Limonade",
            date: "12.04.2024",
            rating: <Rating
                name="read-only"
                value={4}
                readOnly
            />

        },
        {
            id: 2,
            name: "Jane Doe",
            product: "Cookie",
            date: "12.04.2024",
            rating: <Rating
                name="read-only"
                value={5}
                readOnly
            />

        },
        {
            id: 3,
            name: "Bob Smith",
            product: "Cookie",
            date: "12.04.2024",
            rating: <Rating
                name="read-only"
                value={4}
                readOnly
            />
        },
        {
            id: 4,
            name: "Bob Smith",
            product: "Milkshake",
            date: "12.04.2024",
            rating: <Rating
                name="read-only"
                value={4}
                readOnly
            />
        },
        {
            id: 5,
            name: "Bob Smith",
            product: "Coffee",
            date: "12.04.2024",
            rating: <Rating
                name="read-only"
                value={5}
                readOnly
            />
        }
    ]

    return (
        <div className="wrapper wallet pb-8">
            <header className="header gap-4">
                <h1 className="header-title">History</h1>
                <Balance />
            </header>
            <main className="md:mt-8 mt-12 overflow-auto flex flex-col poppins">
                <div className="min-w-[750px] whitespace-wrap min-h-12 mb-6 border border-gray-400 rounded-xl flex items-center justify-between">
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
                <table className="min-w-[750px]">
                    <thead>
                        <tr>
                            <th>Name, Surname</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.product}</td>
                                <td>{item.date}</td>
                                <td>{item.rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default HistoryPage
