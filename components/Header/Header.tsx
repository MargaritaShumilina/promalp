import styles from './header.module.css';
import logo from '../../images/logo.png';
import Image from 'next/image';
import Time from '../../images/time.png';
import Mail from '../../images/mail.png';
import Phone from '../../images/phone.png';

export default function Header({ time, email, phone }) {
  return (
    <header className={styles.header}>
      <div className={styles.itemsOfHeader}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <div className={styles.items}>
          <div className={styles.item}>
            <Image className={styles.iconTime} src={Time} alt="time" />
            <p className={styles.description}>{time}</p>
          </div>
          <div className={styles.item}>
            <Image className={styles.iconEmail} src={Mail} alt="email" />
            <p className={styles.description}>
              Email
              <br />
              {email}
            </p>
          </div>
          <div className={styles.item}>
            <Image className={styles.iconPhone} src={Phone} alt="phone" />
            <p className={styles.description}>
              Call Us
              <br />
              {phone}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
