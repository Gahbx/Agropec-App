import styles from './Estandes.module.css'
import useState from 'react';
type Stand = {
    id: number;
    logo: string;
    name: string;
    description: string;
    background: string;

}
export default function Estandes (){
 
  //   const [stands, setStands] = useState<Stand[]>([
  //   {
  //     id: 1,
  //     logo: "caminho/para/logo1.png",
  //     name: "Hydro",
  //     description: "Mineração Paragominas",
  //     background: "caminho/para/imagem1.jpg",
  //   },
  //   {
  //     id: 2,
  //     logo: "",
  //     name: "Logo aqui",
  //     description: "IMAGEM DE FUNDO DA MARCA OU ESTANDE",
  //     background: "",
  //   },
  //   {
  //     id: 3,
  //     logo: "",
  //     name: "Logo aqui",
  //     description: "IMAGEM DE FUNDO DA MARCA OU ESTANDE",
  //     background: "",
  //   },
  // ]);

  return(
    <div className={styles.pageContainer}>
    <h1 className={styles.title}>Estandes</h1>
    <div className={styles.standsList}>
     
        <div className={styles.standCard}>
          <div className={styles.standContent}>
            <img src="/HydroLogo.svg"
              className={styles.standLogo}
            />
            <div>
              <strong>Hydro</strong>
              <p>Mineracao legal</p>
            </div>
          </div>
        
        
        
        </div>

        
    </div>
  </div>




  );







  
}