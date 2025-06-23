import styles from './footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.left}>
                <strong className={styles.titulo}>MAIS INFORMAÇÕES DO EVENTO:</strong>
                <p className={styles.texto}>REDES SOCIAS, SAC</p>
                <p className={styles.texto}>LOCALIZAÇÃO EXATA, VALORES</p>
                <p className={styles.texto}>ENTRE OUTROS...</p>
            </div>
            <div className={styles.right}>
            <img className={styles.logo} src="AgropecLogo.svg" alt="Logo Branca" /> 
            <img className={styles.logo} src="Sprp.svg" alt="Logo Branca" /> 
            </div>
        </footer>
    )
}