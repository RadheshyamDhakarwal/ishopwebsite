import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineClose } from "react-icons/ai";
import { logout } from '../../Reducers/User';
import { emptyCart } from '../../Reducers/Cart';
import { ShoppingCart, User, Search, Menu, X, Heart, Package } from 'lucide-react';
import { Badge, Button, Dropdown } from 'react-bootstrap';
import { Input } from '../../Components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../Components/ui/dropdown-menu';

const Header = () => {
    const { cart } = useSelector(Store => Store.cart)
    const { user } = useSelector(Store => Store.user)
    const navigate = useNavigate()
    const [activecate, setActiveCate] = useState(undefined)
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const menu = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Store",
            url: "/store"
        },

        {
            name: "Iphone",
            url: "/iphone"
        },
        {
            name: "Ipad",
            url: "/ipad"
        }
    ]


    const categories = [
        { name: 'Clothing', href: '/products?category=clothing' },
        { name: 'Accessories', href: '/products?category=accessories' },
        { name: 'Home Decor', href: '/products?category=home-decor' },
        { name: 'Jewelry', href: '/products?category=jewelry' },
        { name: 'Footwear', href: '/products?category=footwear' },
        { name: 'Bags', href: '/products?category=bags' },
        { name: 'Art', href: '/products?category=art' },
    ];


    return (
        <>
            <div className='w-full md:py-3 bg-white sticky top-0 shadow z-[999999]'>
                
                <div className=" container  md:flex hidden justify-between mx-2  ">
                    <div className="flex items-center justify-content-around gap-16">
                        {/* Logo */}
                        <div>
                            <Link to="/" className="flex items-center space-x-2 gap-8">
                            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                                <Package className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="font-display text-2xl font-bold text-foreground">
                                    Urban Ethnic Hub
                                </h1>
                                <p className="text-xs text-muted-foreground">Authentic • Modern • Global</p>
                            </div>
                        </Link>

                        </div>
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8 gap-8 ">
                            <Link to="/" className="navbar-link">Home</Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="navbar-link">
                                    Categories
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-48 bg-white mt-7">
                                    {categories.map((category) => (
                                        <DropdownMenuItem key={category.name} asChild>
                                            <Link to={category.href} className="w-full">
                                                {category.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Link to="/products" className="navbar-link">All Products</Link>
                            <Link to="/blog" className="navbar-link">Blog</Link>
                            <Link to="/about" className="navbar-link">About</Link>
                            <Link to="/contact" className="navbar-link">Contact</Link>
                        </nav>

                        {/* Search Bar */}
                        <div className="hidden md:flex flex-1 max-w-md mx-8 gap-8">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search products..."
                                    className="pl-10 w-full"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 justify-end gap-5">
                            {/* User Account */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="relative">
                                        <User className="h-5 w-5" />
                                        <span className="sr-only">User account</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48 mt-4 bg-white">
                                    {user ? (
                                        <>
                                            <DropdownMenuItem onClick={() => navigate('/profile')}>
                                                Profile
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => navigate('/orders')}>
                                                My Orders
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => navigate('/wishlist')}>
                                                Wishlist
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => {
                                                localStorage.removeItem("cart")
                                                dispatch(emptyCart());
                                                dispatch(logout())
                                            }
                                            } >
                                                Logout
                                            </DropdownMenuItem>
                                        </>
                                    ) : (
                                        <>
                                            <DropdownMenuItem onClick={() => navigate('/loginWebsite')}>
                                                Login
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => navigate('/register')}>
                                                Register
                                            </DropdownMenuItem>
                                        </>
                                    )}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Wishlist */}
                            <Button variant="ghost" size="sm" onClick={() => navigate('/wishlist')}>
                                <Heart className="h-5 w-5" />
                                <span className="sr-only">Wishlist</span>
                            </Button>

                            {/* Cart */}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="relative  "
                                onClick={() => navigate('/cart')}
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {cart.length > 0 && (
                                    <Badge className="absolute  text-white -top-3 -right-3 h-5 bg-[#007D88] w-5 rounded-full p-0 flex items-center justify-center text-xs">
                                        {cart.length}
                                    </Badge>
                                )}
                                <span className="sr-only">Shopping cart</span>
                            </Button>

                            {/* Mobile menu toggle */}
                            {/* <Button
                                variant="ghost"
                                size="sm"
                                className="lg:hidden"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                                <span className="sr-only">Toggle menu</span>
                            </Button> */}
                        </div>
                    </div>
                    {/* <div className='flex items-center gap-[15px]'>
                        <span className='absolute bg-orange-500 top-[5px] xl:right-[394px] w-[15px] h-[15px]  text-white rounded-full flex justify-center md:right-[255px] 2xl:right-[384]px]  items-center'>{cart.length}</span>
                        <Link to={"/cart"}>
                            <AiOutlineShoppingCart className='coursor-pointer text-2xl' />
                            <img src="images/bag_icon.png" className='coursor-pointer' alt="" />
                        </Link>
                        <span className='text-orange-500'>{cart.length} Item</span>

                        <Link to={"/Userprofile"}>
                            <CgProfile className='text-2xl' />
                        </Link>
                        <i className="bi bi-person-lines-fill"></i>
                        {
                            user == null
                                ?
                                <>
                                    
                                    <Link to={"/loginWebsite"}>
                                        <button type="button" className="text-dark flex gap-2  hover:bg-blue-800  font-medium rounded-full text-1xl px-4 py-1 text-center  hover:text-white  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <BiUser />
                                            <img src="images/loginImg.svg" className='items-center py-1' width={20} height={20} alt="" />
                                            Login
                                        </button>

                                    </Link>

                                </>
                                :
                                <>
                                    <Link to={"/profiletab"}>
                                        <span>{user.name}</span>
                                    </Link>

                                    <button type="button" onClick={() => {
                                        localStorage.removeItem("cart")
                                        dispatch(emptyCart());
                                        dispatch(logout())
                                    }
                                    } className="text-white align-middle flex gap-2 bg-[#007D88]  hover:bg-[#007D88]  font-medium rounded-full text-1xl px-4 py-1 text-center  hover:text-white  dark:hover:bg-[#007D88] dark:focus:ring-[#007D88]">

                                        Logout
                                    </button>
                                </>
                        }


                        <FiSearch className='ml-[30px]' />
                    </div> */}
                </div>

            </div>
            <div className="container flex justify-around !mt-[20px]">
                <img src="images/iSHOP Logo.png" alt="" />
                <FaBars className=' items-center text-3xl md:hidden' onClick={() => setToggle(true)} />
            </div>
            <nav className="container  font-semibold text-base hidden md:block">
                <ul className=' flex justify-center gap-[20px] mt-[10px]'>
                    {
                        menu.map(
                            (m, i) => {
                                return (
                                    <li key={i} onClick={() => setActiveCate(m.url)} className={` cursor-pointer ${activecate == m.url ? ' border-b-2 border-blue-600 text-blue-600 ' : ''}`}>
                                        <Link to={m.url}>
                                            {m.name}
                                        </Link>
                                    </li>

                                )
                            }
                        )
                    }

                </ul>
            </nav>
            {/*             
                resposive menu */}
            <div className=''>
                <ul id='myList' className={`responsivee-menu flex md:hidden   w-full items-center top-0 duration-500  flex-col fixed pt-20 gap-5 ${toggle ? 'left-[0%] opacity-1' : ' opacity-0 left-[-100%]'} `}>
                    <div className="relative text-gray-600">
                        <input type="search" id='myInput' name="serch" placeholder="Search" className="bg-white w-[350px] h-14 px-5 pr-10 rounded-full text-sm focus:outline-none"
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <svg className="h-6 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: "new 0 0 56.966 56.966" }} xmlSpace="preserve" width="512px" height="512px"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    {
                        menu.map(
                            (m, i) => {
                                return (
                                    <li className='text-3xl font-semibold mt-6' key={i}>
                                        <Link to={m.url}>
                                            {m.name}
                                        </Link>
                                    </li>

                                )
                            }
                        )
                    }
                    <AiOutlineClose onClick={() => setToggle(false)} className=' mt-8 text-4xl top-[20px] items-center left-[30px]' />

                </ul>

            </div>
        </>
    );
}

export default Header;
