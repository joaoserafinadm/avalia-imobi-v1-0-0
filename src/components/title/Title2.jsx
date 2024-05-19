import styles from './Title.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {
    faAngleLeft,
    faArrowLeft,
    faBookOpen,
    faChartLine,
    faClipboardList,
    faDiagramProject,
    faHome,
    faUsers,
} from '@fortawesome/free-solid-svg-icons'
import baseUrl from '../../../utils/baseUrl'
import { useEffect, useState } from 'react'
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft'
import isMobile from '../../../utils/isMobile'


export default function Title(props) {

    return (
        <div className={`${styles.headerBox} ${styles.headerBackground} shadow indexBackground`} >
            <div className={`${styles.headerContent}  fadeItem `} >
                <div className="d-inline-flex ">
                    {props.title && (

                        <span className={`${styles.headerTitle} fadeItem`}>{props.title}</span>
                    )}

                </div>
                {props.backButton  && (
                    <Link href='/'>
                        <span type="button" className={styles.backButton}><AiOutlineLeft className="me-2" />Início</span>
                    </Link>
                )}
                {props.title && (

                    <div className={`${styles.headerSubtitle} fadeItem`}>{props.subtitle}</div>
                )}
            </div>
        </div>
    )
}