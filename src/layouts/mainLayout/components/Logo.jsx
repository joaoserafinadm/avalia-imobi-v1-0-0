import styles from './Logo.module.scss'
import Link from 'next/link'

export default function Logo() {
    return (
        <aside className={`${styles.logo}`}>
            <Link href="/">
                <span type='button'>
                    <img src="/LOGO_LIGHT.png" alt="logo" className='' />
                </span>
            </Link>
        </aside>
    )
}