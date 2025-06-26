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
                        <div className={styles.button}>
                                 <div className={styles.linkImg}><img src="Estandes.svg" alt="Imagem 1" /></div>
                                 <strong>Estandes </strong>
                              </div>
                           </Link> 

                            <Link href="/Programacao"  className={`${styles.link} ${pathname === '/Programacao' ? styles.active : ''}`} >   
                           <div className={styles.button}>
                                 <div className={styles.linkImg}>
                                      <img src="Programacao.svg" alt="Imagem 3" />
                                  </div>
                                 <strong>Notificações do evento</strong>
                              </div>
                           </Link> 

                           <Link href="/Map" className={`${styles.link} ${pathname === '/Map' ? styles.active : ''}`}>
                           <div className={styles.button}>
                                  <div className={styles.linkImg}>
                                       <img src="MapaIcon.svg" alt="Imagem 2" />
                                  </div>
                                 <strong>Mapa Interativo do evento</strong>
                              </div>
                           </Link>
                              
                        </div>
                        
            </div>
                        <img src="Linha.svg" alt="Linha divisora" className={styles.linha} />
                              <div className={styles.meio}>
                                 <img src="MeioContent1.svg" className={styles.logo}/>
                                 <img src="MeioContent2.svg" className={styles.logo}/>
                                 <strong className={styles.Meiocontent}>Esses reconhecimentos destacam a importância da Agropec, do Parque de Exposições
                                 e do Sindicato como pilares que preservam nossa história,
                                 fortalecem nossa economia e projetam Paragominas para o futuro.</strong>
                              </div>
                        <img src="Linha.svg" alt="Linha divisora" className={styles.linha} />
                                       <div className={styles.low}>
                                       <img src="/Pgmstroke.svg" className={styles.background} />
                                       <img src="/LowContent.svg" className={styles.foreground} />
                                       </div>

       </div>
    )
}