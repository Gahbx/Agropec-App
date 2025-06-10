'use client'
import styles from "./Not.module.css"
import { useState } from 'react';

const notifications = [
    {
      id: 1,
      icon: "/AgroLogoPreto.svg", // Substitua pelo caminho correto do seu ícone
      title: "Agropec",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
      time: "10:12",
    },
    {
      id: 2,
      icon: "/HydroPreto.svg",
      title: "Hydro",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
      time: "9:30",
    },
    {
      id: 3,
      icon: "/Gen.svg",
      title: "Gen",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
      time: "7:20",
    },
  ];
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType, setSelectedType] = useState("");

export default function Notification() {
return (
    <div className={styles.container}>
      <h1 className={styles.title}>Notificações</h1>

      <div className={styles.filters}>
  <input
    type="date"
    value={selectedDate}
    onChange={e => setSelectedDate(e.target.value)}
  />
  <select
    value={selectedType}
    onChange={e => setSelectedType(e.target.value)}
  >
    <option value="">Todos</option>
    <option value="Agropec">Agropec</option>
    <option value="Hydro">Hydro</option>
    <option value="Gen">Gen</option>
  </select>
</div>

      <div className={styles.notList}>
        {notifications.map((not) => (
          <div className={styles.notCard} key={not.id}>
            <div className={styles.notContent}>
              <img src={not.icon} alt={not.title} className={styles.notIcon} />
              <div>
                <strong>{not.title}</strong>
                <p>{not.text}</p>
              </div>
            </div>
            <span className={styles.notTime}>{not.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}