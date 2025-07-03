import Card from '../Card/Card';
import styles from './Cards.module.css';

function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card delay={0.2} />
        <Card delay={0.4} />
        <Card delay={0.6} />
        <Card delay={0.8} />
      </div>
    </div>
  );
}

export default Cards;