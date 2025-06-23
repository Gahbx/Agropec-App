"use client"
import Carrossel from "./Carrosel/Carrossel";
import Notificacoes from "./Notification/Notifiication";
import styles from "./Programacao.module.css";

export default function Programacao() {
  return (
    <div>
      <h2 >ATIVIDADES</h2>
      <Carrossel />
      <Notificacoes />
    </div>
  );
}