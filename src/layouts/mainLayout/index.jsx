import Head from "next/head";
//import styles from '../styles/Home.module.css'
import Logo from "./components/Logo";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function MainLayout({ children }) {
  const [navbarStatus, setNavbarStatus] = useState(true)


  useEffect(() => {
    handleSidebarToggle()
  }, [navbarStatus])

  const handleSidebarToggle = () => {
    const fixedWidht = document.documentElement.style.getPropertyValue('--aside-fixed-width')
    if (navbarStatus) document.documentElement.style.setProperty('--aside-width', fixedWidht)
    else document.documentElement.style.setProperty('--aside-width', '0px')
  }

  return (
    <div className="app">
      <Navbar setNavbarStatus={() => setNavbarStatus(!navbarStatus)} navbarStatus={navbarStatus} />

      <div className={`col  pages`} >


        <Header navbarStatus={navbarStatus}/>

        {children}
      </div>





    </div>
  );
}
