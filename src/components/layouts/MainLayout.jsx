import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Logo from '../template/Logo'
import Header from '../template/Header'
import Nav from '../template/Nav2'
import { Scrollbars } from 'react-custom-scrollbars-2';


export default function Layout({ children }) {
    return (
        <div className='app layout'>
            {/* <Head>
                <title>AKVO</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="icon" href="favicon.ico" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                    crossorigin="" />
            </Head> */}
            {/* <Scrollbars
                style={{ height: "100vh" }}
                renderTrackVertical={(props) => <div {...props} className="vtrack" />}
                renderThumbVertical={(props) => <div {...props} className="vthumb" />}
            > */}
            <div className="pages" id="pages">
                {children}
            </div>
            {/* </Scrollbars> */}

            <Nav />
            <Logo />
            <Header />

        </div >
    )
}