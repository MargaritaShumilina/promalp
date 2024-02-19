import styles from './text.module.css';
import Decor from '@/images/textblock.jpg';
import Box from '@/images/box.svg';
import Global from '@/images/global.svg';
import Time from '@/images/time.svg';
import Ship from '@/images/ship.svg';
import Call from '@/images/call.svg';
import Money from '@/images/money.svg';

import Image from 'next/image';

export default function Text() {
  return (
    <section className={styles.textBlock}>
      <div className={styles.rightBlock}>
        <Image
          src={Decor}
          width={829}
          height={610}
          alt="Декор"
          className={styles.decorImg}
        />
      </div>
      <div className={styles.leftBlock}>
        <p className={styles.description}>Why Choose</p>
        <h2 className={styles.heading}>
          We create opportunity to reach potential
        </h2>
        <p className={styles.text}>
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition.
        </p>
        <div className={styles.advantages}>
          <ul className={styles.advantagesList}>
            <li className={styles.advantagesItem}>
              <Image
                src={Box}
                alt="Safe Package"
                width={63}
                height={63}
                className={styles.icon}
              />
              <p className={styles.advantagesText}>Safe Package</p>
            </li>
            <li className={styles.advantagesItem}>
              <Image
                src={Global}
                alt="Global Tracking"
                width={63}
                height={63}
                className={styles.icon}
              />
              <p className={styles.advantagesText}>Global Tracking</p>
            </li>
            <li className={styles.advantagesItem}>
              <Image
                src={Time}
                alt="In Time Delivery"
                width={63}
                height={63}
                className={styles.icon}
              />
              <p className={styles.advantagesText}>In Time Delivery</p>
            </li>
            <li className={styles.advantagesItem}>
              <Image
                src={Ship}
                alt="Ship Everyware"
                width={63}
                height={63}
                className={styles.icon}
              />
              <p className={styles.advantagesText}>Ship Everyware</p>
            </li>
            <li className={styles.advantagesItem}>
              <Image
                src={Call}
                alt="24/7 Support"
                width={63}
                height={63}
                className={styles.icon}
              />
              <p className={styles.advantagesText}>24/7 Support</p>
            </li>
            <li className={styles.advantagesItem}>
              <Image
                src={Money}
                alt="Transparant Pricing"
                width={63}
                height={63}
                className={styles.icon}
              />
              <p className={styles.advantagesText}>Transparant Pricing</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
