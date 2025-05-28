"use client";
import styles from './NavBar.module.css'

 
export default function NavBar(){ 

        // const handleClick = () => {
        //         console.log("voce clico");
        //       };  
    
    
    return(
        <section className={styles.navbar}>

            <button className={styles.img}  >
                 <img  src="Home.svg" alt="Home" />
            </button>
            
            <button className={styles.img}>
                 <img  src="Estandes.svg" alt="Estandes" /> 
            </button>

            <button className={styles.img}>
                 <img  src="Mapa.svg" alt="Mapa Interativo" />
            </button>
            
            <button className={styles.img} >
                <img  src="Notificacao.svg" alt="Notificações" />
            </button>
           
           
           
            
            
        </section>
    )
 
    
}