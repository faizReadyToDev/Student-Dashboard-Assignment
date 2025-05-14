import React from 'react';
import { useAuth } from '../Context/AuthContext/AuthContext';
import { LoginWithGoogle } from '../firebaseDB/auth';
import { Navigate } from 'react-router-dom';

function Login() {
    const { userLoggedIn,setUserLoggedIn } = useAuth();

    async function onSubmit() {
        if (!userLoggedIn) {
            await LoginWithGoogle();
            setUserLoggedIn(true);
        }
    }

    return (
        <>
        {userLoggedIn && (<Navigate to={"/home"} replace={true} />)}
            <div className='h-[100vh] bg-black'>
                <div className='w-[80vw] mx-auto flex justify-center p-10  max-sm:p-0 max-sm:items-center'>
                    <div className='flex flex-col items-center justify-center mt-30 border p-10 rounded-2xl bg-white max-sm:p-4 max-sm:w-[95vw] max-sm:mx-auto max-sm:items-center max-sm:mt-60'>
                        <h1 className='text-blue-700 font-bold mb-10 text-xl max-sm:text-2xl max-sm:text-center'>Welcome to Student Management System</h1>
                        <button onClick={onSubmit} className='w-[20vw] flex items-center justify-between px-1 py-2 rounded-md mb-10 bg-blue-600 cursor-pointer max-sm:w-[90vw] hover:bg-blue-400'>
                            <img className='w-[2vw] max-sm:w-[10vw]' src="img/google.png" alt="Google Logo" />
                            <div className='w-[10vw] mx-auto max-sm:w-[90vw]'>
                                <p className='text-white font-bold'>Login with Google</p>
                            </div>
                        </button>
                        <div className='text-xs max-sm:text-justify max-sm:text-md'>
                            <p>By registering you agree to <span className='text-blue-600'>Terms and Conditions</span> and <span className='text-blue-600'>Privacy Policy</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
