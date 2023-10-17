import Head from "next/head";
//import styles from '../styles/Home.module.css'
import Logo from "./components/Logo";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MainLayout({ children }) {

    const toggleStatus = useSelector(state => state.toggleStatus)

    const [navbarStatus, setNavbarStatus] = useState(true)

    useEffect(() => {
        handleSidebarToggle()
    }, [toggleStatus])

    const handleSidebarToggle = () => {
        const fixedWidht = document.documentElement.style.getPropertyValue('--aside-fixed-width')
        if (toggleStatus) document.documentElement.style.setProperty('--aside-width', fixedWidht)
        else document.documentElement.style.setProperty('--aside-width', '0px')
    }



    return (
        <body className="app">
            <Header navbarStatus={navbarStatus} />
            <Navbar />

            <div className={`  pages`} >
                {children}
            </div>





        </body>
    );
}
