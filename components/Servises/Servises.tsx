'use client';

import styles from './servises.module.css';
import { SERVISES } from '../../constants/constants';
import Servise from '../Servise/Servise';
import Back from '../../images/aerrowback.png';
import Forward from '../../images/aerrowforward.png';

import Image from 'next/image';
import { useState } from 'react';

export default function Servises() {
  const [firstSlise, setFirstSlise] = useState(0);
  const [secondSlise, setSecondSlise] = useState(5);

  const slise = () => {
    if (SERVISES.length === 0) {
      return [];
    }
    let servisesPagination = SERVISES.slice(firstSlise, secondSlise);
    return servisesPagination;
  };

  const backServise = () => {
    setFirstSlise(firstSlise - 1);
    setSecondSlise(secondSlise - 1);
    if (firstSlise <= 0) {
      setSecondSlise(SERVISES.length - 1);
      setFirstSlise(SERVISES.length - 6);
      return;
    }
  };

  const forwardServise = () => {
    setFirstSlise(firstSlise + 1);
    setSecondSlise(secondSlise + 1);
    if (secondSlise >= SERVISES.length - 1) {
      setSecondSlise(5);
      setFirstSlise(0);
      return;
    }
  };

  return (
    <section className={styles.servises}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.navigation}>
        <Image
          onClick={backServise}
          className={styles.arrow}
          src={Back}
          alt="Предыдущие услуги"
        />
        <Image
          onClick={forwardServise}
          className={styles.arrow}
          src={Forward}
          alt="Следующие услуги"
        />
      </div>
      <div className={styles.items}>
        {slise().map((item, i) => {
          return (
            <Servise
              img={item.img}
              key={i}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
      <button className={styles.button} type="button">
        Все услуги
      </button>
      <div className={styles.decoration} />
    </section>
  );
}
