import { Search } from "lucide-react";
import Balance from "../../components/Balance";


const SubscribersPage = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            age: 25,
            gender: "Male",
            favorite: "Bench Press"
        },
        {
            id: 2,
            name: "Jane Doe",
            age: 30,
            gender: "Female",
            favorite: "Bench Press"
        },
        {
            id: 3,
            name: "Bob Smith",
            age: 35,
            gender: "Male",
            favorite: "Bench Press"
        }
    ]

    return (
        <div className="wrapper">
            <header className="header flex flex-col gap-4">
                <h1 className="header-title">Subscribers</h1>
                <Balance/>
                <div className="relative flex items-center mt-4">
                    <Search className="absolute top-1/2 transform -translate-y-1/2 left-4" size={20} color="gray" />
                    <input
                        placeholder="Search for subscriber"
                        className="min-w-96 outline-none text-sm py-2 ps-12 pe-2 border rounded-3xl" />
                </div>
            </header>
            <main className="mt-4 px-4 overflow-auto">
                <table className="min-w-[700px]">
                    <thead>
                        <tr>
                            <th>Name, Surname</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Favorite Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td className="text-center">{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.favorite}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default SubscribersPage;
