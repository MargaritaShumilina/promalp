import styles from './aboutcompany.module.css';
import { description } from '../WhatWeDo/whatwedo.module.css';
import BannerAbout from '../../images/bannerabout.jpg';
import Delivery from '../../images/delivery.svg';
import Money from '../../images/money.svg';
import AboutCompanyBefore from '../../images/aboutcompany1.jpg';
import AboutCompanyAfter from '../../images/aboutcompany.jpg';

import Image from 'next/image';

export default function AboutCompany() {
  return (
    <>
      <section className={styles.aboutCompany}>
        <div
          className={styles.bannerAbout}
          style={{
            backgroundImage: `url(${BannerAbout.src})`,
          }}
        ></div>
        <div className={styles.aboutBlock}>
          <div className={styles.aboutDescription}>
            <p className={description}>Why Us</p>
            <h2 className={styles.title}>
              We provide full range global logistics solution
            </h2>
            <p className={styles.aboutText}>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className={styles.aboutText}>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className={styles.item}>
              <Image src={Delivery} alt="Delivery" className={styles.images} />
              <h3 className={styles.benefits}>Delivery on Time</h3>
            </div>
            <div className={styles.item}>
              <Image src={Money} alt="Money" className={styles.images} />
              <h3 className={styles.benefits}>Optimized Travel Cost</h3>
            </div>
          </div>
          <div className={styles.imagesBlock}>
            <Image
              src={AboutCompanyAfter}
              alt="AboutCompany"
              className={styles.imagesBenefits}
            />
            <Image
              src={AboutCompanyBefore}
              alt="AboutCompany1"
              className={styles.imagesBenefitsBefore}
            />
          </div>
        </div>
      </section>
      <div className={styles.numbersBlock}>
        <div className={styles.numbersItems}>
          <p className={styles.numbersItem}>1294</p>
          <span className={styles.numbersDecor}></span>
          <p className={styles.numbersText}>Delivered Packages</p>
        </div>
        <div className={styles.numbersItems}>
          <p className={styles.numbersItem}>3594</p>
          <span className={styles.numbersDecor}></span>
          <p className={styles.numbersText}>Satisfied Clients</p>
        </div>
      </div>
    </>
  );
}
