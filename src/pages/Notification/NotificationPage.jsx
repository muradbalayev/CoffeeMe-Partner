import Balance from "../../components/Balance"

const NotificationPage = () => {

    const data = [
        {
            id: 1,
            title: "John Doe",
            category: 25,
            message: "Male",
            date: "12.04.2024",
            status: "Pending"

        },
        {
            id: 2,
            title: "Jane Doe",
            category: 30,
            message: "Female",
            date: "12.04.2024",
            status: "Pending"

        },
        {
            id: 3,
            title: "Bob Smith",
            category: 35,
            message: "Male",
            date: "12.04.2024",
            status: "Pending"
        },
        {
            id: 3,
            title: "Bob Smith",
            category: 35,
            message: "Male",
            date: "12.04.2024",
            status: "Pending"
        },
        {
            id: 4,
            title: "Bob Smith",
            category: 35,
            message: "Male",
            date: "12.04.2024",
            status: "Pending"
        },
        {
            id: 5,
            title: "Bob Smith",
            category: 35,
            message: "Male",
            date: "12.04.2024",
            status: "Pending"
        }
    ]
    return (
        <div className="wrapper pb-8">
            <header className="header gap-4">
                <h1 className="header-title">Notifications</h1>
                <Balance />
            </header>
            <section className="send-notification md:mt-3 mt-12 md:px-8 px-2">
                <form className="flex flex-col gap-4">
                    <div className="input-group flex flex-col gap-1">
                        <label className="text-lg">Title</label>
                        <input placeholder="Enter title" className="outline-none py-3 px-4 rounded-xl text-sm" />
                    </div>
                    <div className="input-group flex flex-col gap-1">
                        <label className="text-lg">Category</label>
                        <select className="outline-none py-3 px-4 rounded-xl text-sm">
                            <option disabled selected>
                                Category
                            </option>
                            <option>
                                All
                            </option>
                            <option>
                                Subscribed
                            </option>
                        </select>
                    </div>
                    <div className="input-group flex flex-col gap-1">
                        <label className="text-lg">Message</label>
                        <textarea rows={4} placeholder="Enter message" className="outline-none text-sm py-3 px-4 rounded-xl" />
                    </div>
                    <div>
                        <button className="mt-4 px-14 py-4 text-center rounded-xl text-white">
                            Send
                        </button>
                    </div>
                </form>
            </section>
            <main className="notifications mt-3">
            <h1 className="text-3xl mt-2">Recent notifications</h1>
            <main className="mt-8 md:px-4 px-0 overflow-auto">
                <table className="min-w-[700px]">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.message}</td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>

            </main>

        </div>
    )
}

export default NotificationPage
