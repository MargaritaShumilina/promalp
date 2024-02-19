import styles from './review.module.css';
import Decor from '../../images/unnamed.svg';
import Stars from '../../images/star.svg';

import Image from 'next/image';

export default function Review(props) {
  const { img, key, name, servise, review } = props;
  return (
    <div className={styles.review} key={key}>
      <div className={styles.helloBlock}>
        <Image
          src={img}
          alt={name}
          width={100}
          height={100}
          className={styles.reviewer}
        />
        <div className={styles.reviewerBlock}>
          <p className={styles.reviewName}>{name}</p>
          <p className={styles.reviewServise}>{servise}</p>
        </div>
        <Image
          src={Decor}
          alt="декор"
          className={styles.decor}
          width={72}
          height={72}
        />
      </div>
      <p className={styles.reviewText}>{review}</p>
      <Image src={Stars} alt="Оценка" width={180} height={34} />
    </div>
  );
}
