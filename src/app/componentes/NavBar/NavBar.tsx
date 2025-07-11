"use client";

import styles from './NavBar.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
 
export default function NavBar(){ 
 
    const pathname = usePathname();


    return(
        <section className={styles.navbar}>

        
                <Link href="/Home"   className={`${styles.link} ${pathname === '/Home' ? styles.active : ''}`}>
                <img className={styles.img}
                 src="Home.svg"
                  alt="Home" /></Link> 
            
            
    
            <Link href="/Stands" className={`${styles.link} ${pathname === '/Stands' ? styles.active : ''}`}>
             <img className={styles.img}
             src="Estandes.svg"
              alt="Estandes" />
               </Link> 
               
               <Link href="/Map" className={`${styles.link} ${pathname === '/Map' ? styles.active : ''}`}>
                <img  src="MapaIcon.svg"
                  alt="Mapa Interativo"
                   className={styles.img} />
               </Link>   
            
               <Link href="/Programacao"  className={`${styles.link} ${pathname === '/Programacao' ? styles.active : ''}`} >   
               <img  src="Programacao.svg"
                 alt="Programacao"
                  className={styles.img} />
               </Link> 
              
            
           
           
           
            
            
        </section>
    )
 
    
}