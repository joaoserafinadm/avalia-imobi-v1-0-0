import styles from "./Login.module.scss";

import { useState } from "react";
import Head from "next/head";

import SignIn from "./SignIn";
import RescuePassword from "./RescuePassword";
import SignUp from "./SignUp";
import AuthModal from "./AuthModal";

export default function Login() {
  const [section, setSection] = useState("signIn");

  return (
    <>
      <Head>
        <title>Corretor de Valor</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={`${styles.container} container-fluid`}>
        <Head>
          <title>Corretor de Valor</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="favicon.ico" />
        </Head>

        {section === "signIn" && (
          <SignIn section={section} setSection={(value) => setSection(value)} />
        )}

        {section === "rescuePassword" && (
          <RescuePassword
            section={section}
            setSection={(value) => setSection(value)}
          />
        )}

        {section === "signUp" && (
          <SignUp section={section} setSection={(value) => setSection(value)} />
        )}
      </div>
    </>
  );
}
