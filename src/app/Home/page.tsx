"use client";
import styles from './Home.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home(){
   const pathname = usePathname();

    return(
       
       <div className={styles.main}>
            <div className={styles.high}>
                         

                  <img className={styles.logo} src='HighContent.svg'/>

                     
                     <p className={styles.p}>PARQUE DE EXPOSIÇÕES - PARAGOMINAS/PA
                     DE 09 A 17 DE AGOSTO DE 2025</p>

                 
                     <strong className={styles.strong}>Aqui você pode visualizar: </strong>

                     
                     <div className={styles.NavContent}>      
                        <Link href="/Stands" className={`${styles.link} ${pathname === '/Stands' ? styles.active : ''}`}>
                        <div className={styles.linha}>
                                 <img src="Estandes.svg" alt="Imagem 1" />
                                 <span>Estandes </span>
                              </div>
                           </Link> 

                            <Link href="/PRogramacao"  className={`${styles.link} ${pathname === '/Programacao' ? styles.active : ''}`} >   
                           <div className={styles.linha}>
                                 <img src="Programacao.svg" alt="Imagem 3" />
                                 <span>Notificações do evento</span>
                              </div>
                           </Link> 

                           <Link href="/Map" className={`${styles.link} ${pathname === '/Map' ? styles.active : ''}`}>
                           <div className={styles.linha}>
                                 <img src="MapaIcon.svg" alt="Imagem 2" />
                                 <span>Mapa Interativo do evento</span>
                              </div>
                           </Link>   
                        </div>
               
            </div>
            <div className={styles.meio}>
              
                  <img className={styles.meioImg} src='MeioContent1.svg'></img>
                  <img className={styles.meioImg} src='MeioContent2.svg'></img>
   
            </div>

              <div className={styles.low}>
                  <img className={styles.LowContent} src="LowContent.svg"></img>
      
                </div>


       </div>
    )
}