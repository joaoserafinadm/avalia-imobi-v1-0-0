import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './menuBar.module.scss'
import { faHomeUser, faList, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function MenuBar(props) {

    const router = useRouter()

    const [pathname, setPathname] = useState('')

    useEffect(() => {

        setPathname(router.pathname)

    }, [router.pathname])





    return (
        <div className={`${styles.container}`}>
            <div className="row h-100 px-4">
                <div className="col-3 d-flex justify-content-center align-items-center ">

                    <Link href='/editProfile'
                        className={`text-center  ${pathname === '/editProfile' ? `${styles.pageSelected}` : 'text-light'}`}>
                        <FontAwesomeIcon icon={faUser} /> <br />
                        <span style={{ fontSize: '10px' }}>Meu perfil</span>
                    </Link>

                </div>
                <div className="col-3 d-flex justify-content-center align-items-center ">

                    <Link href='/usersManagement'
                        className={`text-center  ${pathname === '/usersManagement' ? `${styles.pageSelected}` : 'text-light'}`}>
                        <FontAwesomeIcon icon={faUsers} /> <br />
                        <span style={{ fontSize: '10px' }}>Usuários</span>
                    </Link>

                </div>
                <div className="col-3 d-flex justify-content-center align-items-center ">

                    <Link href='/clientsManagement'
                        className={`text-center  ${pathname === '/clientsManagement' ? `${styles.pageSelected}` : 'text-light'}`}>
                        <FontAwesomeIcon icon={faHomeUser} /> <br />
                        <span style={{ fontSize: '10px' }}>Clientes</span>
                    </Link>

                </div>
                <div className="col-3 d-flex justify-content-center align-items-center ">

                    <Link href='/accountSetup'
                        className={`text-center  ${pathname === '/accountSetup' ? `${styles.pageSelected}` : 'text-light'}`}>
                        <FontAwesomeIcon icon={faList} /> <br />
                        <span style={{ fontSize: '10px' }}>Configurações</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}



{/* <div className="col-3 d-flex justify-content-center align-items-center ">
                    <span>
                        <FontAwesomeIcon icon={faUsers} />
                    </span>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center ">
                    <span>
                        <FontAwesomeIcon icon={faUsers} />
                    </span>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center ">
                    <span>
                        <FontAwesomeIcon icon={faUsers} />
                    </span>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center ">
                    <span>
                        <FontAwesomeIcon icon={faUsers} />
                    </span>
                </div> */}





// <div>

//         <Link href='/usersManagement' className='text-center text-light '>
//             <FontAwesomeIcon icon={faUsers} /> <br />
//             <span className='small'>Usuários</span>
//         </Link>
//     </div>
//     <Link href='/clientsManagement' className='text-center text-light '>
//         <FontAwesomeIcon icon={faHomeUser} /> <br />
//         <span className='small'>Clientes</span>
//     </Link>
//     <Link href='/clientsManagement' className='text-center text-light '>
//         <FontAwesomeIcon icon={faList} /> <br />
//         <span className='small'>Imobiliária</span>
//     </Link>