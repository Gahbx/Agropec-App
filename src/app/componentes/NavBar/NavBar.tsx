"use client";

import styles from './NavBar.module.css'
import Link from 'next/link';

 
export default function NavBar(){ 
 
    return(
        <section className={styles.navbar}>

        
                <Link href="/Home" className={styles.link}>
                <img className={styles.img}
                 src="Home.svg"
                  alt="Home" /></Link> 
            
            
    
            <Link href="/Stands" className={styles.link}>
             <img className={styles.img}
             src="Estandes.svg"
              alt="Estandes" />
               </Link> 
               
               <Link href="/Map"  className={styles.link}>
                <img  src="Mapa.svg"
                  alt="Mapa Interativo"
                   className={styles.img} />
               </Link>   
            
               <Link href="/Notification"  className={styles.link}  >   
               <img  src="Notificacao.svg"
                 alt="Notificações"
                  className={styles.img} />
               </Link> 
              
            
           
           
           
            
            
        </section>
    )
 
    
}