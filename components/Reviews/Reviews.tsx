'use client';
import styles from './reviews.module.css';
import { REVIEWS } from '../../constants/constants';
import Review from '../Review/Review';
import Back from '../../images/aerrowback.png';
import Forward from '../../images/aerrowforward.png';

import Image from 'next/image';
import { useState } from 'react';

export default function Reviews() {
  const [firstReview, setFirstReview] = useState(0);
  const [secondReview, setSecondReview] = useState(2);

  const slise = () => {
    if (REVIEWS.length === 0) {
      return [];
    }
    let reviewsPagination = REVIEWS.slice(firstReview, secondReview);
    return reviewsPagination;
  };

  const backReview = () => {
    setFirstReview(firstReview - 1);
    setSecondReview(secondReview - 1);
    if (firstReview <= 0) {
      setSecondReview(REVIEWS.length - 1);
      setFirstReview(REVIEWS.length - 3);
      return;
    }
  };

  const forwardReview = () => {
    setFirstReview(firstReview + 1);
    setSecondReview(secondReview + 1);
    if (secondReview >= REVIEWS.length - 1) {
      setFirstReview(0);
      setSecondReview(2);
      return;
    }
  };
  return (
    <section className={styles.reviews}>
      <p className={styles.description}>Testimonial</p>
      <div className={styles.heading}>
        <h2 className={styles.title}>What Our Customer Say</h2>
        <div className={styles.navigation}>
          <Image
            onClick={backReview}
            className={styles.arrow}
            src={Back}
            width={45}
            height={45}
            alt="Предыдущие услуги"
          />
          <Image
            onClick={forwardReview}
            className={styles.arrow}
            src={Forward}
            width={45}
            height={45}
            alt="Следующие услуги"
          />
        </div>
      </div>

      <div className={styles.reviewsBlock}>
        {slise().map((item, i) => {
          return (
            <Review
              img={item.img}
              key={i}
              name={item.name}
              servise={item.servise}
              review={item.review}
            />
          );
        })}
      </div>
    </section>
  );
}
