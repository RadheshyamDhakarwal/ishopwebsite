
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Reducers/User';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DocumentTitle from '../../Components/Title/DocumentTitle';
const LoginWebSite = () => {
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);
    const { cart } = useSelector(store => store.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const notify = () => toast.success("User Login Successfully");
    const PageTitle=("Login Page")
    const loginUser = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (password != "" && email != "") {
            axios.post(
                "http://localhost:5000/user/login", { email, password }
            ).then(
                (success) => {

                    if (success.data.status == 1) {
                        const userData = success.data.user;
                        axios.post(
                            "http://localhost:5000/cart/move-to-cart/" + userData._id,
                            cart
                        )
                            .then(
                                (success) => {
                                    if (success.data.status == 1) {
                                        setError(false);
                                        setMsg(success.data.msg);
                                        dispatch(login({ user: userData }));
                                        notify()
                                        setTimeout(() => {
                                            event.target.reset();
                                            navigate("/")
                                        },5000);
                                    }
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    toast.error("user not login please try ")
                                }
                            )

                    } else {
                        setError(true);
                        setMsg(success.data.msg);
                        toast.error("password and email not match please try again ")
                    }
                }
            )
                .catch(
                    () => [

                    ]
                )
        } else {
            setError(true);
            setMsg("Please fill all the feilds");
            toast.error("Please fill all the feilds")

        }
    }
    DocumentTitle(PageTitle)
    return (
        <section className="bg-gray-50  dark:bg-gray-900 h-screen ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">

                <div className="w-full mt-24 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" >
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className=
                            {` text-center text-2xl ${error ? 'text-red-500' : 'text-green-500'}`}
                        >
                            {msg}
                        </div>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={loginUser}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-none focus:ring focus:ring-[#007D88]"
                                    placeholder="name@company.com"
                                   
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input name="password" id="password" placeholder="••••••••" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring focus:ring-[#007D88]"
                                    
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-[#007D88] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#007D88] dark:ring-offset-gray-800 bg-[#007D88]"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <Link
                                    to="/forget-password"
                                    className="text-sm font-medium text-[#007D88]  "
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-[#007D88]   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blu  "
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link to="/signup"
                                    className="font-medium  text-[#007D88]  "
                                >
                                    Sign up

                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default LoginWebSite;
