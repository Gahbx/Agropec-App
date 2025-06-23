'use client'
import InteractiveMap from './componentes/InterativeMap';
import styles from './mapa.module.css';

export default function MapaPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mapa Interativo</h1>
      <div className={styles.mapWrapper}>
        <InteractiveMap 
          imageUrl="/MapaOfc.png" 
          alt="Mapa da propriedade" 
        />
      </div>
    </div>
  );
} 