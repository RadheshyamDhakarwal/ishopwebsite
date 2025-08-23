import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Helps from '../../Components/Website/Helps';
import { FaCartPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addTocart } from '../../Reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';
import PageLoading from '../../Components/comman/PageLoading';
import Contact from '../../Components/Website/Contact';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Badge, Button } from 'react-bootstrap';

const Home = () => {
    // const { category, product, proBaseUrl } = useContext(Context);
    const { category } = useSelector(Store => Store.category);
    const { product, imgBaseUrl } = useSelector(Store => Store.product);
    const [activecate, setActiveCate] = useState(undefined)
    const [loading, setLoading] = useState()

    const dispatch = useDispatch()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    const helpsData = [
        {
            img: "images/refund.svg",
            title: 'FREE SHIPPING',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        },
        {
            img: "images/shipping.svg",
            title: '100% REFUND',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        },
        {
            img: "images/support.svg",
            title: 'SUPPORT 24/7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        },
        // Add more help items as needed
    ];
    const sliderimage = [
        {
            img: "images/beatssolo.png",
            title: 'Beats 2 On Ear Headphones',

        },
        {
            img: "images/Hsquared.png",
            title: 'H-Squared tvTray',

        },
        {
            img: "images/Netatmorain.png",
            title: 'Netatmo Rain Gauge',

        },
        {
            img: "images/beatssolo.png",
            title: 'Beats 2 On Ear Headphones',

        },
        {
            img: "images/Hsquared.png",
            title: 'H-Squared tvTray',

        },
        {
            img: "images/Netatmorain.png",
            title: 'Netatmo Rain Gauge',

        }
        // Add more help items as needed
    ];


    const contact = [
        {
            img: "images/ishops.svg",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.Since the 1500s, when an unknown printer'
        },
        {

            title: 'Follow Us',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.Since the 1500s, when an unknown printer'
        },
        {

            title: 'Contact Us',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.Since the 1500s, when an unknown printer'
        },
        // Add more help items as needed
    ];
    let displayproduct = product;
    if (activecate != undefined) {
        displayproduct = product.filter(
            (prod) => {
                if (prod.category_id == activecate) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }
    const { slug } = useParams();
    // let showProduct = product;

    const categoryData = category.filter((cat) => {
        if (cat.slug == slug) {
            return true;
        } else {
            return false;
        }
    });
    if (categoryData[0] !== undefined) {
        displayproduct = product.filter((p) => {
            if (p.category_id == categoryData[0]._id) {
                return true;
            } else {
                return false;
            }
        });
    }

    if (loading) {
        return <PageLoading />
    }


     const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

    return (
        <>
            {
                category ? (
                    <div>


                        {/* ... your banner and menu code ... */}
                        <div className='w-full h-[650px]  banner1 relative mt-5  '>
                            <img src="images/2_corousel.png" alt="" className='absolute right-[0] bottom-[0]' />
                        </div>
                        <div className="container text-center justify-center sm:text-1xl text-2xl font-bold !mt-[40px]">
                            <span> BEST SELLER</span>
                        </div>
                        <ul className='font-bold md:flex justify-center  text-base hidden gap-[10px] my-5'>
                            <li onClick={() => setActiveCate(category._id)} className={`cursor-pointer ${activecate == category._id ? 'text-blue-600 border-b-2 border-blue-600' : ''} hover:text-[#33A0FF]`} >All </li>
                            {

                                category.map(
                                    (cat, i) => {
                                        return <li onClick={() => setActiveCate(cat._id)} key={i} className={`cursor-pointer ${activecate == cat._id ? 'text-blue-600 border-b-2 border-blue-600' : ''} hover:text-[#33A0FF]`}>{cat.name} </li>

                                    }
                                )
                            }

                        </ul>
                        <hr />
                        {/* resposive product page  */}


                        <div className='items-center px-4 mb-4 md:hidden'>
                            <select id="countries" className="bg-gray-50 text-center  border mt-6  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {/* <option selected>Choose a Category</option> */}
                                <option onClick={() => setActiveCate(category._id)} className={`cursor-pointer ${activecate == category._id ? 'text-blue-600 border-b-2 border-blue-600' : ''} hover:text-[#33A0FF]`} >All </option>
                                {

                                    category.map(
                                        (cat, i) => {
                                            return (
                                                <>
                                                    {
                                                        cat.status && (
                                                            <option value={cat.slug} key={i}>
                                                                {cat.name}
                                                            </option>
                                                        )
                                                    }
                                                    {/* <option onSubmit={() => setActiveCate(category._id)} key={i} className={`cursor-pointer ${activecate == cat._id ? 'text-blue-600  border-blue-600' : ''} hover:text-[#33A0FF]`}>{cat.name} </option> */}
                                                </>
                                            )
                                            // <option onSubmit={() => setActiveCate(category._id)} key={i} className={`cursor-pointer ${activecate == cat._id ? 'text-blue-600  border-blue-600' : ''} hover:text-[#33A0FF]`}>{cat.name} </option>

                                        }
                                    )
                                }
                            </select>
                        </div>
                        <hr />
                        {/* BESSETSELLER Product Page */}
                        {/* <div className="container mx-auto  pt-4 w-full justify-center lg:justify-between  md:gap-[60px] gap-[40px] flex flex-wrap "> */}

                        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-32 pt-4 ">

                            {
                                displayproduct.map(
                                    (prodt, index) => {
                                        return (
                                            <div key={index} className="product-card group relative overflow-hidden">
                                                {/* <Link to={`/product/${prodt.id}`} className="block"> */}
                                                    {/* Image Container */}
                                                    <div className="aspect-square overflow-hidden bg-muted">
                                                        <img
                                                            src={imgBaseUrl + "/" + prodt.image}
                                                            alt={prodt.name}
                                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                            loading="lazy"
                                                        />

                                                        {/* Badges */}
                                                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                                                            {discountPercentage > 0 && (
                                                                <Badge className="bg-destructive text-destructive-foreground">
                                                                    -{discountPercentage}%
                                                                </Badge>
                                                            )}
                                                            {/* {!prodt.inStock && (
                                                                <Badge variant="secondary">
                                                                    Out of Stock
                                                                </Badge>
                                                            )} */}
                                                        </div>

                                                        {/* Wishlist Button */}
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                // Add to wishlist logic here
                                                            }}
                                                        >
                                                            <Heart className="h-4 w-4" />
                                                        </Button>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-4 space-y-3">
                                                        {/* Category */}
                                                        <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
                                                            {prodt.category}
                                                        </p>

                                                        {/* Name */}
                                                        <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                                            {prodt.name}
                                                        </h3>

                                                        {/* Rating */}
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        className={`h-3 w-3 ${i < Math.floor(prodt.rating)
                                                                            ? 'fill-accent text-accent'
                                                                            : 'text-muted-foreground'
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <span className="text-xs text-muted-foreground">
                                                                {/* ({prodt.reviews}) */}
                                                            </span>
                                                        </div>

                                                        {/* Price */}
                                                        <div className="flex items-center gap-2">
                                                            <span className="price-text text-lg font-semibold">
                                                                ${prodt.price}
                                                            </span>
                                                            {product.originalPrice && (
                                                                <span className="text-sm text-muted-foreground line-through">
                                                                    ${prodt.originalPrice}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Add to Cart Button */}
                                                        <Button
                                                            onClick={() => dispatch(addTocart({ pId: prodt._id }))}
                                                            // disabled={!product.inStock}
                                                            className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 flex items-center justify-center transition-all duration-300 shadow-md"
                                                            size="sm"
                                                        >
                                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                                            {/* {product.inStock ? 'Add to Cart' : 'Out of Stock'} */}
                                                            Add to Cart
                                                        </Button>
                                                    </div>
                                                {/* </Link> */}
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>

                        {/* resposive product page  */}


                        <div className="container text-center py-14 ">
                            <span className=' text-indigo-700 font-bold border-solid border-b-4 border-indigo-700 '>LOAD MORE</span>
                        </div>
                        {/* ... your banner code ... */}
                        <div className="mt-20  md:mt-10 w-full h-[600px] flex flex-wrap relative banner2">
                            <div className='text-white md:ms-32   mt-12  absolute'>
                                <h1 className='text-4xl md:text-6xl sm:mt-2 text-center'>iphone 6 plus</h1>
                                <p className='font-proxima pt-4 text-2xl md:text-3xl text-center md:text-left'>
                                    Performance and design. Taken <br /> right to the edge.
                                </p>
                                <div className="container pt-6 text-center md:text-left">
                                    <span className='text-white-700 font-bold border-solid border-b-4 border-white-700'>
                                        SHOP NOW
                                    </span>
                                </div>
                            </div>

                            <div className=''>
                                <img src="images/iphone_6_plus.png" className='absolute right-[0] bottom-[0]' alt="" />
                            </div>
                        </div>

                        <div className="container justify-center lg:justify-between text-center lg:w-auto flex flex-wrap  font-proxima-nova text-base leading-6">


                            {
                                helpsData.map(
                                    (help, index) => (
                                        <Helps key={index} title={help.title} img={help.img} description={help.description}
                                        />
                                    )
                                )
                            }

                        </div>
                        {/* Add the Slider component here */}
                        <div className="container text-center mx-auto ">
                            <h4 className='font-bold  my-10'>FEATURED PRODUCTS</h4>
                        </div>

                        {/* ... your remaining code ... */}
                        <div className="container-fulid shadow-2xl lg:mt-6 ">
                            <div className="container justify-center lg:justify-between  lg:w-auto flex flex-wrap lg:gap-[45px] font-proxima-nova text-base leading-6 ">

                                {
                                    contact.map(
                                        (contact, index) => (
                                            <Contact key={index} title={contact.title} img={contact.img} description={contact.description} />
                                        )
                                    )
                                }
                            </div>
                        </div>

                    </div>
                ) : (<PageLoading />)
            }
        </>
    );
};

export default Home;
