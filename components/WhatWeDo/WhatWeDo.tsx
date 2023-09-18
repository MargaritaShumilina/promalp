import styles from './whatwedo.module.css';
import Clining from '../../images/window.png';
import Facade from '../../images/floor.png';
import Montage from '../../images/tools.png';
import Special from '../../images/chainsaw.png';

import Image from 'next/image';

export default function WhatWeDo() {
  return (
    <section className={styles.services}>
      <div className={styles.descriptionOfService}>
        <p className={styles.description}>What We Do</p>
        <h2 className={styles.title}>Safe & Reliable Cargo Solutions</h2>
      </div>
      <div className={styles.servicesLine}>
        <div className={styles.serviceItem}>
          <div className={styles.serviceImg}>
            <Image
              src={Clining}
              alt="Клининговые работы"
              className={styles.image}
            />
          </div>
          <div className={styles.serviceTextBlock}>
            <h3 className={styles.serviceTitle}>Клининговые работы</h3>
            <p className={styles.serviceDescription}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.serviceImg}>
            <Image
              src={Facade}
              alt="Фасадные работы"
              className={styles.image}
            />
          </div>
          <div className={styles.serviceTextBlock}>
            <h3 className={styles.serviceTitle}>Фасадные работы</h3>
            <p className={styles.serviceDescription}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.servicesLine}>
        <div className={styles.serviceItem}>
          <div className={styles.serviceImg}>
            <Image
              src={Montage}
              alt="Монтажные работы"
              className={styles.image}
            />
          </div>
          <div className={styles.serviceTextBlock}>
            <h3 className={styles.serviceTitle}>Монтажные работы</h3>
            <p className={styles.serviceDescription}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.serviceImg}>
            <Image
              src={Special}
              alt="Специальные работ"
              className={styles.image}
            />
          </div>
          <div className={styles.serviceTextBlock}>
            <h3 className={styles.serviceTitle}>Специальные работы</h3>
            <p className={styles.serviceDescription}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
