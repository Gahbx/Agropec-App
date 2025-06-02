import styles from './Home.module.css'

export default function Home(){
    return(
       
       <div className={styles.main}>
            <div className={styles.high}>
              <strong className={styles.strong}>Bem-vindo(a),       
              </strong>

              <img className={styles.logo} src='AgropecYellow.svg'/>

               <strong className={styles.strong}>2025!  
               </strong >

               <p className={styles.p}>PARQUE DE EXPOSIÇÕES - PARAGOMINAS/PA
               DE 09 A 17 DE AGOSTO DE 2025</p>

            </div>

            <img className={styles.vector} src="vetor horizontal amarelo.svg"/>

              <div className={styles.low}>
                  <strong className={styles.strong}>Aqui você pode visualizar: </strong>
                  <div className={styles.linha}>
                     <img src="EstandesYellow.svg" alt="Imagem 1" />
                     <span>Estandes </span>
                  </div>
                  <div className={styles.linha}>
                     <img src="MapaYellow.svg" alt="Imagem 2" />
                     <span>Mapa Interativo do evento</span>
                  </div>
                  <div className={styles.linha}>
                     <img src="notificacaoYellow.svg" alt="Imagem 3" />
                     <span>Notificações do evento</span>
                  </div>
                </div>


       </div>
    )
}