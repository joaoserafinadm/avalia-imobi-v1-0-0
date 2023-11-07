import React, { useEffect, useState } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { Provider, useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { PersistGate } from "redux-persist/integration/react";
import { createGlobalStyle } from "styled-components";


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
import NewClient from "../src/pages/newClient/index.jsx";


// import SignUp from '../src/components/signUp/SignUp'
// import PremiumAccount from '../src/components/premiumAccount/PremiumAccount'

export default function MyApp({ Component, pageProps }) {

    const token = Cookie.get('auth') ? jwt.decode(Cookie.get('auth')) : false

    const router = useRouter();
    const newRoute = router.asPath;
    const premiumAccount = newRoute === "/premiumAccount";
    const newClient = newRoute === "/newClient";


    const [passwordRecoverRoute, setPasswordRecoverRoute] = useState(false);
    const [newClientRoute, setNewClientRoute] = useState(false);

    useEffect(() => {
        hrefVerify();
    }, []);

    const hrefVerify = async () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const queryId = urlSearchParams.get("id");
        const queryToken = urlSearchParams.get("token");
        const queryClientId = urlSearchParams.get("clientId");

        console.log(urlSearchParams, queryId, queryToken, queryClientId)

        if (queryId && queryToken) {
            setPasswordRecoverRoute(true);
            var passwordRecoverRoute = true;
        }

        if (queryId && queryClientId) {
            setNewClientRoute(true);
            var newClientRoute = true;
        }

        if (!Cookie.get("auth") &&
            window.location.href !== baseUrl() &&
            !passwordRecoverRoute &&
            !newClientRoute) {

            setTimeout(async () => {
                await Router.replace("/");
            }, 1000);

        }
    };

    const render = () => {



        if (!token && passwordRecoverRoute) {
            return <PasswordRecover />;
        }

        if ( newClientRoute) {
            return <NewClient />;
        }


        if (!token) {
            return (
                <Provider store={store}>
                    <PersistGate persistor={persistedStore}>

                        <Login onChange={(token) => setToken(token)} />

                    </PersistGate>
                </Provider>
            );
        }



        if (token) {
            return (
                <Provider store={store}>
                    <PersistGate persistor={persistedStore}>
                        <Head>
                            <title>Avalia Imobi</title>
                            <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                            />
                            <link rel="icon" href="favicon.ico" />

                            <link rel="manifest" href="/manifest.json" />
                            <link rel="apple-touch-icon" href="/icon.png" />
                            <meta name="theme-color" content="#fff" />
                        </Head>

                        <MainLayout>

                            <Component  {...pageProps} />
                        </MainLayout>
                    </PersistGate>
                </Provider>
            );
        }
    };

    return <div>{render()}</div>;
}
