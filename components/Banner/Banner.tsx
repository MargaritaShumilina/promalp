import styles from './banner.module.css';
import BannerImage from '../../images/banner.jpg';
import Instagram from '../../images/instagram.svg';
import Vk from '../../images/facebook.svg';

import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section>
      <Image src={BannerImage} alt="Banner" className={styles.banner} />
      <div className={styles.navigation}>
        <nav className={styles.navigationList}>
          <ul className={styles.navigationItems}>
            <li className={styles.navigationItem}>
              <Link href="/" className={styles.navigationLink}>
                Главная
              </Link>
              <span className={styles.borderDecoration}></span>
            </li>
            <li className={styles.navigationItem}>
              <Link href="/about" className={styles.navigationLink}>
                О компании
              </Link>
              <span className={styles.borderDecoration}></span>
            </li>
            <li className={styles.navigationItem}>
              <Link href="/#" className={styles.navigationLink}>
                Услуги
              </Link>
              <span className={styles.borderDecoration}></span>
            </li>
            <li className={styles.navigationItem}>
              <Link href="/#" className={styles.navigationLink}>
                Наши работы
              </Link>
              <span className={styles.borderDecoration}></span>
            </li>
            <li className={styles.navigationItem}>
              <Link href="/#" className={styles.navigationLink}>
                Контакты
              </Link>
              <span className={styles.borderDecoration}></span>
            </li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <ul className={styles.contactsItems}>
            <li className={styles.contactsItem}>
              <Link href="/#" className={styles.contactsLink}>
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className={styles.contactsIcon}
                />
              </Link>
            </li>
            <li className={styles.contactsItem}>
              <Link href="/#">
                <Image src={Vk} alt="Vk" className={styles.contactsLink} />
              </Link>
            </li>
          </ul>
          <button type="button" className={styles.contactsButton}>
            Задать вопрос
          </button>
        </div>
        <div className={styles.bannerBlock}>
          <div className={styles.bannerTextBlock}>
            <h1 className={styles.mainPageTitle}>
              Your Gateway to any Destination in the World
            </h1>
            <p className={styles.mainPageDescription}>
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
              id dapibus finibus, enim diam interdum nulla, sed laoreet risus
              lectus.{' '}
            </p>
          </div>
          <button type="button" className={styles.buttonStyle}>
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
}
