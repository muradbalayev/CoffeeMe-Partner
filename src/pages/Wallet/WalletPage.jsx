import Balance from '../../components/Balance'

const WalletPage = () => {
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
        <div className="wrapper wallet pb-8">
            <header className="header flex flex-col gap-4">
                <h1 className="header-title">Wallet</h1>
                <Balance />
            </header>
            <main className='flex flex-col mt-10'>
                <div className='flex gap-4'>
                    <div className='debet-card bg-gradient-to-r from-[#e7c783] to-[#E4C770] rounded-xl max-w-[350px] max-h-[220px] relative' >
                        <div className='overlay'>
                            <svg width="400" height="230" viewBox="0 0 166 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={{ mixBlendMode: 'screen' }} fillRule="evenodd" clipRule="evenodd"  opacity="0.35" d="M57.89 230H0.380005L107.62 0.0400391H165.14L57.89 230Z" fill="url(#paint0_linear_1_11240)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_11240" x1="82.76" y1="230" x2="82.76" y2="0.0500445" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0" />
                                        <stop offset="1" stopColor="white" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <div className='flex flex-col poppins absolute bottom-6 left-6'>
                            <p className='text-gray-200 font-normal'>Balance</p>
                            <h3 className='text-2xl text-white'>The Cups</h3>
                        </div>
                    </div>
                    <div>
                    <button className='poppins px-8 py-4 rounded-xl text-white text-sm'>Withdraw</button>
                    </div>
                </div>
                <section className="notifications mt-3">
            <h1 className="text-3xl mt-6">Recent notifications</h1>
            <main className="mt-8 overflow-auto">
                <table>
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

            </section>
            </main>
        </div>
    )
}

export default WalletPage
