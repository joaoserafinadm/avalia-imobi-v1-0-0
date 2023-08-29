import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { Provider, useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import baseUrl from "../utils/baseUrl";

import "../styles/globals.scss";
import "font-awesome/css/font-awesome.min.css";
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

import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

import { store, persistedStore } from "../store/store";

// import MobilePage from '../src/components/mobile/MobilePage'
import SetUp from "../src/pages/login";
import PasswordRecover from "../src/pages/login/PasswordRecovery";
// import SignUp from '../src/components/signUp/SignUp'
// import PremiumAccount from '../src/components/premiumAccount/PremiumAccount'
// import { akvoToolInitialValues } from '../store/AkvoTools/AkvoTools.actions'
import Head from "next/head";
import MainLayout from "../src/layouts/mainLayout";
// import Modernizr from 'modernizr'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const newRoute = router.asPath;
  const signUpRoute = newRoute === "/signup";
  const premiumAccount = newRoute === "/premiumAccount";

  const [passwordRecoverRoute, setPasswordRecoverRoute] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 450) {
      setMobile(true);
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

    if (Cookie.get("auth")) {
      localStorage.setItem("auth", Cookie.get("auth"));
      const localToken = localStorage.getItem("auth");
      setToken(localToken);
    }
    if (
      !Cookie.get("auth") &&
      window.location.href !== baseUrl() &&
      !passwordRecoverRoute &&
      window.location.href !== `${baseUrl()}/signup` &&
      window.location.href !== `${baseUrl()}/premiumAccount`
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
            <SetUp onChange={(token) => setToken(token)} />
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
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                  crossorigin=""
                />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <meta name="theme-color" content="#fff" />
              </Head>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </PersistGate>
          </Provider>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
}
