import './Login.css'
import loginbg from '../../assets/authbackground.png'
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();
        navigate('/dashboard')
    }

    return (
        <div className='relative w-full h-full flex justify-center items-center'>
            <div style={{ backgroundImage: `url(${loginbg})` }}
                className='lg:flex hidden container__left w-1/2 h-full  justify-center items-center border-r border-black'>
                <img src={logo} className='object-fit' alt="logo" />
            </div>

            <div
                className='container__right lg:w-1/2 w-full flex justify-center items-center flex-col'>
                <h1 className="poppins text-black text-2xl font-semibold">LOGIN</h1>

                <form className=" flex flex-col items-center"
                    onSubmit={handleLogin}
                >
                    <div className="flex flex-col gap-1 w-80">
                        <label className="text-gray-600 ms-1 text-sm">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="p-2 w-full outline-none text-base rounded-lg bg-transparent border" placeholder="Enter username" />
                    </div>
                    <div className="flex flex-col gap-1 mt-3 w-80">
                        <label className="text-gray-600 ms-1 text-sm">Password</label>
                        <div className="relative">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={type ? "text" : "password"}
                                required
                                className="p-2 w-full outline-none text-base rounded-lg bg-transparent border " placeholder="Enter password" />

                            <span className='eye_icon absolute' onClick={() => setType(!type)}>
                                {type ? <Eye size={20} /> : <EyeOff size={20} />}
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex gap-2 items-center font-medium text-sm mt-2">
                        <p className='ms-1 text-gray-600'>Remember me</p>

                        <input
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            type="checkbox" className="hidden" />

                        <div className="checkbox-wrapper-31" onClick={() => setRememberMe(!rememberMe)}>
                            <input type="checkbox" />
                            <svg viewBox="0 0 35.6 35.6">
                                <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                            </svg>
                        </div>



                    </div>
                    <button
                        type="submit"
                        className="rounded-lg text-white w-full p-2 border font-semibold bg-green-900 mt-6 flex justify-center text-center">
                        Login
                    </button>

                </form>

            </div>
        </div>
    )
}

export default LoginPage
