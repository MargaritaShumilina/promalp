import styles from './servise.module.css';

export default function Servise({ img, name, price }) {
  return (
    <div
      className={styles.image}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>От {price}</p>
    </div>
  );
}
