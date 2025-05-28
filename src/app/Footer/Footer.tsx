import styles from './footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <strong className={styles.titulo}>MAIS INFORMAÇÕES DO EVENTO:</strong>
                <p className={styles.texto}>REDES SOCIAS, SAC</p>
                <p className={styles.texto}>LOCALIZAÇÃO EXATA, VALORES</p>
                <p className={styles.texto}>ENTRE OUTROS...</p>
            </div>
            <div>
            <img  src="Logo Branca.svg" alt="Logo Branca" /> 
            </div>
        </footer>
    )
}