import styles from './form.module.css';
import Time from '../../images/time.png';
import Mail from '../../images/mail.png';
import Phone from '../../images/phone.png';

import Image from 'next/image';

export default function Form() {
  return (
    <section className={styles.form}>
      <div>
        <p className={styles.description}>Contact</p>
        <h2>Get in touch with us</h2>
        <p>
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value.
        </p>
        <ul>
          <li>
            <Image
              src={Mail}
              alt="Почта"
              width={63}
              height={63}
              className={styles.icon}
            />
            <p>Email contact@logistics.com</p>
          </li>
          <li>
            <Image
              src={Phone}
              alt="Телефон"
              width={63}
              height={63}
              className={styles.icon}
            />
            <p>Call Us (00) 112 365 489</p>
          </li>
          <li>
            <Image
              src={Time}
              alt="Время работы"
              width={63}
              height={63}
              className={styles.icon}
            />
            <p>Mon - Sat 9.00 - 18.00 Sunday Closed</p>
          </li>
        </ul>
      </div>
      <div>
        <Form></Form>
      </div>
    </section>
  );
}
