import { useState } from 'react';
import Balance from '../../components/Balance'

const WithdrawPage = () => {
    const [amount, setAmount] = useState(0);  

    const handleNumberClick = (number) => {
        setAmount(prevAmount => parseInt(prevAmount.toString() + number)); 
    };

    const handleClear = () => {
        setAmount(0);  // Clear the current amount
    };  

    return (
        <div className="wrapper withdraw pb-8">
            <header className="header flex flex-col gap-4">
                <h1 className="header-title">Wallet</h1>
                <Balance />
            </header>
            <main className='flex flex-col items-center mt-4    '>
                <div className='debet-card bg-gradient-to-r from-[#e7c783] to-[#E4C770] rounded-xl max-w-[310px] max-h-[200px] relative' >
                    <div className='overlay'>
                        <svg width="400" height="230" viewBox="0 0 166 230" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <p className='text-gray-200 font-normal'>Balance</p>
                        <h3 className='text-2xl text-white'>The Cups</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-2 pt-2">
                    <div className="money flex flex-nowrap text-2xl text-center overflow-auto font-semibold max-w-[300px]"><p>{amount || "0"}</p> <span className="text-sm">AZN</span></div>
                    <div className="w-40  mb-3 border-t border-green-600"></div>
                    <div className="grid grid-cols-3 gap-4">
                        {/* Keypad buttons */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
                            <button key={number} onClick={() => handleNumberClick(number)} className="w-20 h-16 active:ring-2 active:ring-green-500 bg-white border border-gray-300 rounded-lg text-xl">
                                {number}
                            </button>
                        ))}
                        <button onClick={() => handleNumberClick("0")} className="w-20 h-16 active:ring-2 active:ring-green-500 bg-white border border-gray-300 rounded-lg text-xl col-span-2">0</button>
                        <button onClick={handleClear} className="w-20 h-16 active:ring-2 active:ring-green-500 button-close bg-gray-200 border border-gray-300 rounded-lg text-xl text-gray-600">✕</button>
                    </div>
                    <button className="w-full bg-green-700 text-white py-3 rounded-lg mt-4">Withdraw</button>
                </div>
            </main>
        </div>
    )
}

export default WithdrawPage
