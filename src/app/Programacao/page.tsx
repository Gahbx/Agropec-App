"use client"
import Carrossel from "./Carrosel/Carrossel";
import Notificacoes from "./Notification/Notifiication";
import styles from "./Programacao.module.css";

export default function Programacao() {
  return (
    <div>
      <strong className={styles.title} >ATIVIDADES</strong>
      <Carrossel />
      <Notificacoes />
    </div>
  );
}