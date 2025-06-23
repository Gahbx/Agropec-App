'use client'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import styles from './InterativeMapa.module.css';

interface InteractiveMapProps {
  imageUrl: string;
  alt?: string;
}

export default function InteractiveMap({ imageUrl, alt = 'Mapa interativo' }: InteractiveMapProps) {
  return (
    <div className={styles.mapContainer}>
      <TransformWrapper
        initialScale={2}
        minScale={1}
        maxScale={5 }
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className={styles.controls}>
              <button onClick={() => zoomIn()} className={styles.controlButton}>
                +
              </button>
              <button onClick={() => zoomOut()} className={styles.controlButton}>
                -
              </button>
              <button onClick={() => resetTransform()} className={styles.controlButton}>
                Reset
              </button>
            </div>
            <TransformComponent>
              <img src={imageUrl} alt={alt} className={styles.mapImage} />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}