"use client"
import styles from "./Not.module.css";

type Notificacao = {
  hora: string;
  titulo: string;
  mensagem: string;
  categoria: "vermelha" | "amarela" | "branca";
};

const notificacoes: Notificacao[] = [
  {
    hora: "AGORA!",
    titulo: "SHOW DO FELIPE AMORIM COMEÇA EM 30 MINUTOS!!",
    mensagem: "",
    categoria: "vermelha",
  },
  {
    hora: "20:21",
    titulo: "VISITE O ESTANDE DA 'MARCA' E SURPREENDA-SE...",
    mensagem: "",
    categoria: "amarela",
  },
  {
    
    hora: "14:42",
    titulo: "ACOMPANHE O INSTAGRAM DA AGROPEC @agropec_pgm",
    mensagem: "",
    categoria: "branca",
  },
];

export default function Notificacoes() {
  return (
    <div>
      <strong className={styles.titulo}>Notificações</strong>
      <div className={styles.lista}>
        {notificacoes.map((n, i) => (
          <div key={i} className={`${styles.notificacao} ${styles[n.categoria]}`}>
            
            <div className={styles.hora}>{n.hora}</div>
            <div>
              <div className={styles.tituloNot}>{n.titulo}</div>
              {n.mensagem && <div>{n.mensagem}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}