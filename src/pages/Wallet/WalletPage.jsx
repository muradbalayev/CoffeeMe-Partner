import { Link } from 'react-router-dom'
import Balance from '../../components/Balance'

const WalletPage = () => {
    const data = [
        {
            id: 1,
            name: "Murad Balayev",
            price: "25",
            date: "12.04.2024",
            status: "Pending"

        },
        {
            id: 2,
            name: "Ali Aghayev",
            price: "18",
            date: "12.04.2024",
            status: "Pending"

        },
        {
            id: 3,
            name: "Mirsaleh Aliyev",
            price: "25",
            date: "12.04.2024",
            status: "Pending"
        },
        {
            id: 3,
            name: "Camal Cemilov",
            price: "20",
            date: "12.04.2024",
            status: "Pending"
        },
        {
            id: 4,
            name: "Kamal Abdullayev",
            price: "30",
            date: "12.04.2024",
            status: "Pending"
        },
        {
            id: 5,
            name: "Kenan Ahmedzade",
            price: "40",
            date: "12.04.2024",
            status: "Pending"
        }
    ]

    return (
        <div className="wrapper wallet pb-8">
            <header className="header gap-4">
                <h1 className="header-title">Wallet</h1>
                <Balance />
            </header>
            <main className='flex flex-col md:mt-10 mt-12'>
                <div className='flex md:flex-row flex-col gap-4 items-start'>
                    <div className='debet-card overflow-hidden bg-gradient-to-r from-[#e7c783] to-[#E4C770] rounded-xl md:max-w-[350px] md:max-h-[220px] max-w-[280px] max-h-[170px] relative' >
                        <div className='overlay'>
                            <svg width="350" height="230" viewBox="0 0 166 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={{ mixBlendMode: 'screen' }} fillRule="evenodd" clipRule="evenodd" opacity="0.35" d="M57.89 230H0.380005L107.62 0.0400391H165.14L57.89 230Z" fill="url(#paint0_linear_1_11240)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_11240" x1="82.76" y1="230" x2="82.76" y2="0.0500445" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0" />
                                        <stop offset="1" stopColor="white" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <div className='flex flex-col poppins absolute bottom-6 left-6'>
                            <p className='text-gray-200 font-normal md:text-base text-sm'>Balance</p>
                            <h3 className='md:text-2xl text-xl text-white'>The Cups</h3>
                        </div>
                    </div>
                    <div className='text-center flex items-center justify-center'>
                        <Link to={'/dashboard/withdraw'}  className='withdraw-btn poppins md:px-8 md:py-4 px-5 py-3 rounded-xl text-white text-sm'>Withdraw</Link>
                    </div>
                </div>
                <section className="notifications mt-3">
                    <h1 className="text-3xl mt-6">Recent transactions</h1>
                    <main className="mt-8 overflow-auto">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className='whitespace-nowrap'>{item.name}</td>
                                        <td>{item.price}</td>
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
