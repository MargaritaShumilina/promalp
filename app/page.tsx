import Banner from '../components/Banner/Banner';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import styles from './page.module.css';
import Servises from '../components/Servises/Servises';
import Reviews from '../components/Reviews/Reviews';
import Text from '../components/Text/Text';
import Gallery from '@/components/Gallery/Gallery';
import Form from '@/components/Form/Form';

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <WhatWeDo />
      <AboutCompany />
      <Servises />
      <Reviews />
      <Text />
      <Gallery />
      <Form />
    </div>
  );
}
