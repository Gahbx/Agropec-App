"use client"
import React, { useState } from "react";
import styles from "./Carrossel.module.css";

const imagens = [
  { src: "/Carrosel1.svg", alt: "Programação 1" },
  { src: "/Carrosel2.svg", alt: "Programação 2" },
  { src: "/Carrosel3.svg", alt: "Programação 3" },
  // Adicione mais imagens conforme necessário
];

export default function Carrossel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % imagens.length);
  const prev = () => setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);

  return (
    <div className={styles.carrossel}>
      <button className={styles.button} onClick={prev}>{"<"}</button>
      <img src={imagens[index].src} alt={imagens[index].alt} className={styles.imagem} />
      <button className={styles.button} onClick={next}>{">"}</button>
    </div>
  );
}