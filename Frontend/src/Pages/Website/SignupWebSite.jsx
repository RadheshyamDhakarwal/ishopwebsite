import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DocumentTitle from '../../Components/Title/DocumentTitle';
const SignupWebSite = () => {
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);
    const notify = () => toast.success("User Registration Successfully");
    const navigate =useNavigate();
    const PageTitle="Register Page"
    const singUpHandler = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;
        if (name != "" && email != "" && password != "" && confirm_password != "") {
            if (password != confirm_password) {
                setError(true)
                setMsg("Both Password must match")
                toast.error("Both Password Must Match")
            } else {
                axios.post("http://localhost:5000/user/create-account", { name, email, password })
                    .then(
                        (success) => {
                          
                            if (success.data.status == 1) {
                                setError(false);
                                setMsg(success.data.msg);
                                notify()
                                setTimeout(()=>{
                                    event.target.reset();
                                    navigate("/loginwebsite")
                                })
                               
                            }else{
                                setError(true);
                                setMsg(success.data.msg);
                                toast.error("User Not Registration")
                            }
                        }
                    )
                    .catch(
                        () => [

                        ]
                    )
            }
        } else {
            setError(true)
            setMsg("Please Fill  all the Feilds")
            toast.error("Please Fill all the Feild ")

        }

    }
    DocumentTitle(PageTitle)
    return (
        <>
            <section className="bg-gray-50 pt-6 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                    
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className={` text-center text-2xl ${error ? 'text-red-500' : 'text-green-500'}`}>
                                {msg}
                            </div>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={singUpHandler} >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                        Your Name
                                    </label>
                                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-[#007D88] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ark:focus:ring-[#007D88] dark:focus:border-[#007D88] focus:outline-none focus:ring focus:ring-[#007D88] " placeholder='your name '
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                        Your email
                                    </label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-[#007D88] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ark:focus:ring-[#007D88] dark:focus:border-[#007D88] focus:outline-none focus:ring focus:ring-[#007D88]" placeholder="name@company.com" 
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-[#007D88] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#007D88] dark:focus:border-[#007D88] focus:outline-none focus:ring focus:ring-[#007D88]" 
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="confirm_password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Confirm password
                                    </label>
                                    <input type="confirm_password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-[#007D88] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#007D88] dark:focus:border-[#007D88] focus:outline-none focus:ring focus:ring-[#007D88]" 
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="terms"
                                            className="font-light text-gray-500 dark:text-gray-300"
                                        >
                                            I accept the{" "}
                                            <a
                                                className="font-medium text-[#007D88]  dark:text-[#007D88]"
                                               
                                            >
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-[#007D88] hover:bg-[#007D88] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#007D88] dark:hover:bg-[#007D88] "
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{" "}
                                    <Link
                                        to="/loginwebsite"
                                        className="font-medium text-[#007D88] dark:text-[#007D88]"
                                    >
                                        Login here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default SignupWebSite;
