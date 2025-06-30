"use client"
import styles from './Estandes.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Stand = {
  id: number;
  logo: string;
  name: string;
  description: string;
  background: string;
};

export default function Estandes (){
  const router = useRouter();

  const [stands, setStands] = useState<Stand[]>([
    {
      id: 1,
      logo: "HydroLogo.svg",
      name: "Hydro",
      description: "Mineração Paragominas",
      background: "/image.svg",
    },
    {
      id: 2,
      logo: "/NoneLogo.svg",
      name: "Logo aqui",
      description: "IMAGEM DE FUNDO DA MARCA OU ESTANDE",
      background: "/NoneFundo.svg",
    },
    {
      id: 3,
      logo: "/NoneLogo.svg",
      name: "Logo aqui",
      description: "IMAGEM DE FUNDO DA MARCA OU ESTANDE",
      background: "/NoneFundo.svg",
    },
    {
      id: 4,
      logo: "/NoneLogo.svg",
      name: "Logo aqui",
      description: "IMAGEM DE FUNDO DA MARCA OU ESTANDE",
      background: "/NoneFundo.svg",
    },
  ]);

  return(

    <div className={styles.pageContainer}>
    <h1 className={styles.title}>Estandes</h1>
    <div className={styles.standsList}>
      {stands.map((stand) => (
        <div
          key={stand.id}
          className={styles.standCard}
          style={{
            backgroundImage: stand.background
              ? `url(${stand.background})`
              : "none",
            backgroundPosition: "center",
          }}
          onClick={() => {
            if (stand.name.toLowerCase() === 'hydro') {
              router.push('/Map?stand=hydro');
            }
          }}
        >
          <div className={styles.standContent}>
            <img
              src={stand.logo || "https://via.placeholder.com/40"}
              alt="Logo"
              className={styles.standLogo}
            />
            <div>
              <strong>{stand.name}</strong>
              <p>{stand.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>



  );







  
}