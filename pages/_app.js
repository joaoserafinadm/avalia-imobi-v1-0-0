import React, { useEffect, useState } from "react";
// import Document, { Html, Head, Main, NextScript } from "next/document";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { Provider, useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { PersistGate } from "redux-persist/integration/react";
import { createGlobalStyle } from "styled-components";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

if (typeof window !== "undefined") {
    window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
    require("apexcharts/dist/apexcharts.common.js");
    require("../node_modules/popper.js/dist/umd/popper.min.js");
    require("jquery");
    require("@popperjs/core");
    require("bootstrap");
    require("bootstrap/dist/css/bootstrap.min.css");
    require("bootstrap/dist/js/bootstrap.bundle");
    require("bootstrap/dist/js/bootstrap.min.js");
}

import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

import baseUrl from "../utils/baseUrl";
import { store, persistedStore } from "../store/store";

import "../styles/globals.scss";
import 'font-awesome/css/font-awesome.min.css'

import MainLayout from "../src/layouts/mainLayout";
import Login from "../src/pages/login";
import PasswordRecover from "../src/pages/login/PasswordRecovery";
import jwt from "jsonwebtoken";


// import SignUp from '../src/components/signUp/SignUp'
// import PremiumAccount from '../src/components/premiumAccount/PremiumAccount'

export default function MyApp({ Component, pageProps }) {

    const token = Cookie.get('auth') ? jwt.decode(Cookie.get('auth')) : false

    const router = useRouter();
    const newRoute = router.asPath;
    const signUpRoute = newRoute === "/signup";
    const premiumAccount = newRoute === "/premiumAccount";

    const [passwordRecoverRoute, setPasswordRecoverRoute] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 450) {
            // window.location.href = 'http://localhost:3001'
        } else {
            hrefVerify();

            if (window.innerWidth < 800) {
                document.documentElement.style.setProperty("--aside-width", "0px");
            }
        }
    }, []);

    const hrefVerify = async () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const queryId = urlSearchParams.get("id");
        const queryToken = urlSearchParams.get("token");

        if (queryId && queryToken) {
            setPasswordRecoverRoute(true);
            var passwordRecoverRoute = true;
        }

        if (
            !Cookie.get("auth") &&
            window.location.href !== baseUrl() &&
            !passwordRecoverRoute
        ) {
            setTimeout(async () => {
                await Router.replace("/");
            }, 1000);
        }
    };

    const render = () => {
        if (!token) {
            return (
                <Provider store={store}>
                    <PersistGate persistor={persistedStore}>
                        <main className={montserrat.className}>

                            <Login onChange={(token) => setToken(token)} />
                        </main>

                    </PersistGate>
                </Provider>
            );
        }

        if (!token && passwordRecoverRoute) {
            return <PasswordRecover />;
        }

        if (token) {
            return (
                <div className="fadeItem2s customScroll">
                    <Provider store={store}>
                        <PersistGate persistor={persistedStore}>
                            <Head>
                                <title>Avalia Imobi</title>
                                <meta
                                    name="viewport"
                                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                                />
                                <link rel="icon" href="favicon.ico" />
                                <link rel="preconnect" href="https://fonts.googleapis.com" />
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                                <link rel="manifest" href="/manifest.json" />
                                <link rel="apple-touch-icon" href="/icon.png" />
                                <meta name="theme-color" content="#fff" />
                            </Head>
                            <MainLayout>
                                <main className={montserrat.className}>
                                    <Component {...pageProps} />
                                </main>
                            </MainLayout>
                        </PersistGate>
                    </Provider>
                </div>
            );
        }
    };

    return <div>{render()}</div>;
}
