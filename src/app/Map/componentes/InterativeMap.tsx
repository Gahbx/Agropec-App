'use client'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import styles from './InterativeMapa.module.css';
import { useEffect, useRef } from 'react';

interface InteractiveMapProps {
  imageUrl: string;
  alt?: string;
  focusStand?: string | null;
}

const standFocus: Record<string, { x: number; y: number; zoom: number }> = {
  hydro: { x: 1500, y: -650, zoom: 2 }, // ajuste conforme a posição real e zoom desejado
  // outros stands podem ser adicionados aqui
};

export default function InteractiveMap({ imageUrl, alt = 'Mapa interativo', focusStand }: InteractiveMapProps) {
  const wrapperRef = useRef<any>(null);

  return (
    <div className={styles.mapContainer} ref={wrapperRef}>
      <TransformWrapper
        initialScale={2}
        minScale={1}
        maxScale={5}
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut, resetTransform, setTransform }) => {
          useEffect(() => {
            if (focusStand && standFocus[focusStand]) {
              const { x, y, zoom } = standFocus[focusStand];
              const mapWidth = wrapperRef.current?.clientWidth || 1;
              const mapHeight = wrapperRef.current?.clientHeight || 1;
              const centerX = (x + 0.05) * mapWidth;
              const centerY = (y + 0.05) * mapHeight;
              setTransform(-centerX + mapWidth / 2, -centerY + mapHeight / 2, zoom, 300, 'easeOut');
            }
          }, [focusStand]);

          return (
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
                <div style={{ position: 'relative' }}>
                  <img src={imageUrl} alt={alt} className={styles.mapImage} />
                  {focusStand === 'hydro' && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '81%', // ajuste conforme a posição real da Hydro
                        top: '28%',
                        width: '8%',
                        height: '8%',
                        border: '3px solid blue',
                        borderRadius: '8px',
                        pointerEvents: 'none',
                        boxShadow: '0 0 20px 5px rgba(0,0,255,0.5)'
                      }}
                    />
                  )}
                </div>
              </TransformComponent>
            </>
          );
        }}
      </TransformWrapper>
    </div>
  );
}