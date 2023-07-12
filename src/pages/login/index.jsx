import styles from './Login.module.scss'

import { useState } from 'react'
import Login from './Login'
import RescuePassword from './RescuePassword'
import Head from 'next/head'
import SignIn from './SingIn'






export default function SetUp() {

    const [section, setSection] = useState('login')




    return (
        <>
            <Head>
                <title>Corretor de Valor</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="icon" href="CV_ICON.ico" />
            </Head>
            <div className={`${styles.container} container-fluid`}>

                <Head>
                    <title>Corretor de Valor</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" href="CV_ICON.ico" />
                </Head>

                {section === 'login' && (
                    <Login section={section} setSection={(value) => setSection(value)} />
                )}

                {section === 'rescuePassword' && (
                    <RescuePassword section={section} setSection={(value) => setSection(value)} />
                )}

                {section === 'signIn' && (
                    <SignIn section={section} setSection={(value) => setSection(value)} />
                )}


            </div>
        </>

    )
}