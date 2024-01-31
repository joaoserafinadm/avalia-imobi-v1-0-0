import styles from "./Login.module.scss";

import { useState } from "react";
import Head from "next/head";

import SignIn from "./SignIn";
import RescuePassword from "./RescuePassword";
import SignUp from "./SignUp";
import AuthModal from "./AuthModal";
import { useSession } from "next-auth/react";
import { SpinnerLG } from "../../components/loading/Spinners";

export default function Login() {
  const [section, setSection] = useState("signIn");

  const session = useSession()

  const handleSocialAAuth = (user) => {

    console.log("user", user)


  }

  if (session.status === "loading") {
    return (
      <div className={`${styles.container} container-fluid`}>
        <SpinnerLG />
      </div>
    )
  }

  if(session.status === "authenticated") {
    handleSocialAAuth(session?.data?.user)
    return (
      <div className={`${styles.container} container-fluid`}>
        <SpinnerLG />
      </div>
    )
  }

  return (
    <>
      <div className={`${styles.container} container-fluid`}>

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
