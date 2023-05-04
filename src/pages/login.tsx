import Image from 'next/image'
import {CiMail} from 'react-icons/ci'
import {TbPassword} from 'react-icons/tb'

const Login = () => {
  return (
    <main className={"flex flex-col items-center justify-center min-h-screen flex-1 px-20 text-center"}>
        <div className="form-bg bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
            <div className="big-side w-3/5 p-5">
                <div className="text-xl text-left font-bold">
                    <Image className='inline-block mr-4' src="/keycloak.svg" alt="Keycloak Logo" width="48" height="48"></Image>
                    <span>KeyCloak </span>
                    <span className="text-blue">Login</span>
                </div>
                <div className='pt-16 pb-2'>
                    <h2 className="text-4xl font-bold mb-2">Login to Sales</h2>
                    <div className="border-2 w-24 border-black mb-2 inline-block"></div>
                </div>
                <div className='flex flex-col items-center email-field m-1'>
                    <div className='bg-gray-200 w-64 p-1 flex items-center'>
                        <CiMail className='text-gray-500 m-2'/>
                        <input type='email' name="email" placeholder='E-Mail' className='bg-gray-200 border-0 outline-none flex-1 text-sm'/>
                    </div>
                </div>
                <div className='flex flex-col items-center password-field m-1'>
                    <div className='bg-gray-200 w-64 p-1 flex items-center'>
                        <TbPassword className='text-gray-500 m-2'/>
                        <input type='password' name="password" placeholder='Password' className='bg-gray-200 border-0 outline-none flex-1 text-sm'/>
                    </div>
                </div>
                <a href="#" className="login-btn border-2 rounded-full mt-2 px-12 py-2 inline-block font-semibold transition duration-100 ease-in-out">Log in</a>
            </div>
            <div className="small-side w-2/5 p-5 rounded-tr-2xl rounded-br-2xl text-white py-36 px-12">
                <h2 className="text-3xl font-bold mb-2">You don&apos;t have an account?</h2>
                <div className="border-2 w-10 border-white mb-2 inline-block"></div>
                <p className="font-semibold mb-2">Join us now!</p>
                <a href="/register" className="signup-btn border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white transition duration-100 ease-in-out">Sign up</a>
            </div>
        </div>
    </main>
  );
};

export default Login;

