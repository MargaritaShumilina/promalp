import Banner from '../components/Banner/Banner';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <WhatWeDo />
      <AboutCompany />
    </div>
  );
}
