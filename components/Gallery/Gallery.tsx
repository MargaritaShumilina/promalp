import styles from './gallery.module.css';
import Gallery1 from '@/images/textblock.jpg';
import Gallery2 from '@/images/refat-ul-islam-b1fU9Vi3W5A-unsplash.jpg';
import Gallery3 from '@/images/javier-saint-jean-cHuptIj_WP0-unsplash.jpg';
import Gallery4 from '@/images/banner.jpg';
import Gallery5 from '@/images/aboutcompany.jpg';
import Gallery6 from '@/images/aboutcompany1.jpg';
import Gallery7 from '@/images/reviews/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';

import Image from 'next/image';

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <p className={styles.description}>The Transporters</p>
      <h2 className={styles.heading}>Meet Expert Team</h2>
      <div className={styles.galleryItems}>
        <Image
          src={Gallery2}
          alt="Изображение1"
          className={styles.galleryVert}
          width={400}
          height={600}
        />
        <Image
          src={Gallery1}
          alt="Изображение2"
          className={styles.galleryImg}
          width={400}
          height={200}
        />
        <Image
          src={Gallery3}
          alt="Изображение3"
          className={styles.galleryImg}
          width={400}
          height={200}
        />
        <Image
          src={Gallery4}
          alt="Изображение4"
          className={styles.galleryGorizont}
          width={800}
          height={400}
        />
        <Image
          src={Gallery5}
          alt="Изображение5"
          className={styles.galleryImg}
          width={400}
          height={200}
        />
        <Image
          src={Gallery6}
          alt="Изображение6"
          className={styles.galleryImg}
          width={400}
          height={200}
        />
        <Image
          src={Gallery7}
          alt="Изображение7"
          className={styles.galleryImg}
          width={400}
          height={200}
        />
      </div>
    </section>
  );
}
