import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Logo from '../template/Logo'
import Header from '../template/Header'
import Nav from '../template/Nav2'
import { Scrollbars } from 'react-custom-scrollbars-2';


export default function Layout({ children }) {
    return (
        <div className='app layout'>
            <div className="pages" id="pages">
                {children}
            </div>

            <Nav />
            <Logo />
            <Header />

        </div >
    )
}