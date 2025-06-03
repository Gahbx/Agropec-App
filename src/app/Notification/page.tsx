import styles from "./Not.module.css"

export default function Notification (){
   return(
        <div className={styles.container}>
            <h1 className={styles.title}></h1>
                <div className={styles.notList}>
                {/* {nots.map((not) => ( ))} */}
                    <div 
                    className={styles.notCard}>
                        <div className={styles.notContent}>
                            
                        </div>

                        
                    </div>


                </div>
        </div>
   )    
}