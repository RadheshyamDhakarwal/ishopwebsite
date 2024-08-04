import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../Components/Website/Header';
import Footer from '../../Components/Website/Footer';
import { useSelector } from 'react-redux';
import DocumentTitle from '../../Components/Title/DocumentTitle';

const Main = () => {
    const[activename,setActiveName]=useState('Home');
    const PageTttle=("ishop")
    // const navigate =useNavigate();
    // const {user} = useSelector(Main => Main.user);
    
    // useEffect(() => {
    //     if (!user) {
    //         navigate("/loginwebsite")
    //     }else(
    //         navigate("/")
    //     )
        
    //  }, [navigate]);
    DocumentTitle(PageTttle)
    return (
       <>
       <Header />
       <Outlet activename={activename}/>
       <Footer />
       </>
    );
}

export default Main;
