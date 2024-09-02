import { Search } from "lucide-react";


const MenuPage = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            category: 'Drink',
            price: "695",
            size: "636",
            type: 'Takeaway'
        },
        {
            id: 2,
            name: "Jane Doe",
            category: 'Drink',
            price: "675",
            size: "636",
            type: 'Takeaway'

        },
        {
            id: 3,
            name: "Bob Smith",
            category: 'Drink',
            price: "367",
            size: "636",
            type: 'Takeaway'

        }
    ]

    return (
        <div className="wrapper">
            <header className="header flex flex-col gap-4">
                <h1 className="header-title">Menu</h1>
                <div className="relative flex items-center mt-4">
                    <Search className="absolute top-1/2 transform -translate-y-1/2 left-4" size={20} color="gray" />
                    <input
                        placeholder="Search for product"
                        className="min-w-96 outline-none text-sm py-2 ps-12 pe-2 border rounded-3xl" />
                </div>
            </header>
            <main className="mt-4 px-4 overflow-auto">
                <table >
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Type</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td><img  className="mx-auto rounded-lg" src="https://via.placeholder.com/50" alt="Product" /></td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.size}</td>
                                <td>{item.type}</td>
                                <td className="text-green-500">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default MenuPage;
