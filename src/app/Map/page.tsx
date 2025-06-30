'use client'
import InteractiveMap from './componentes/InterativeMap';
import styles from './mapa.module.css';
import { useSearchParams } from 'next/navigation';

export default function MapaPage() {
  const searchParams = useSearchParams();
  const stand = searchParams.get('stand');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mapa Interativo</h1>
      <div className={styles.mapWrapper}>
        <InteractiveMap 
          imageUrl="/MAPA.svg" 
          alt="Mapa da propriedade" 
          focusStand={stand}
        />
      </div>
    </div>
  );
} 