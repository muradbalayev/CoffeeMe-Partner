import { Search } from "lucide-react";
import Balance from "../../components/Balance";
import { Button } from "@mui/material";


const MenuPage = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            category: 'Drink',
            price: "695",
            size: "636",
            type: 'Takeaway',
            status: "true",
            pending: 'false'
        },
        {
            id: 2,
            name: "Jane Doe",
            category: 'Drink',
            price: "675",
            size: "636",
            type: 'Takeaway',
            status: "false",
            pending: 'false'

        },
        {
            id: 3,
            name: "Bob Smith",
            category: 'Drink',
            price: "367",
            size: "636",
            type: 'Takeaway',
            status: "true",
            pending: 'true'

        }
    ]

    return (
        <div className="wrapper">
            <header className="header gap-4">
                <h1 className="header-title">Menu</h1>
                <Balance />
                <div className="relative flex items-center mmd:mt-4 mt-12">
                    <Search className="absolute top-1/2 transform -translate-y-1/2 left-4" size={20} color="gray" />
                    <input
                        placeholder="Search for product"
                        className="min-w-96 outline-none text-sm py-2 ps-12 pe-2 border rounded-3xl" />
                </div>
            </header>
            <main className="mt-4 px-4 overflow-auto">
                <table className="min-w-[700px]">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td><img className="mx-auto rounded-lg" src="https://via.placeholder.com/50" alt="Product" /></td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.size}</td>
                                <td>{item.type}</td>
                                <td className="text-green-500">
                                    <div className={`relative py-2  rounded-lg shadow-lg backdrop-blur-sm bg-white/30 border ${item.status === 'true' ? 'border-green-600' : 'border-red-600'}`}>
                                        <p
                                            className={`text-sm transition-all duration-300 ${item.status === 'true' ? 'text-green-600' : 'text-red-600'
                                                }`}
                                        >
                                            {item.status === 'true' ? 'In Stock' : 'Out of Stock'}
                                        </p>
                                        {item.status === 'true' && (
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                                        )}
                                    </div>                                </td>
                                {
                                    item.pending === "true" ?
                                        <td>
                                            <Button size="small" variant="contained" color="warning">Pending</Button>
                                        </td>
                                        :
                                        <td className="text-green-500">
                                            {item.status === 'true' ? <Button size="small" variant="contained" color="error">Out of Stock</Button> : <Button size="small" variant="contained" color="success">In Stock</Button>}
                                        </td>
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default MenuPage;
