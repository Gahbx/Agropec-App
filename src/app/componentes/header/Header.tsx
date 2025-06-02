import styles from './Heade.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <img className={styles.logo} src="/Agropec.svg" alt="logo" />
        </header>
    )
}