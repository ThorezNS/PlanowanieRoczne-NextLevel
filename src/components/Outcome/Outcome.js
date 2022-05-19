import styles from './Outcome.module.css';

const Outcome = ({ description, result, point }) => {
  return (
    <p className={styles.description}>
      {description}
      <span className={styles.result}>
        {result ? ` ${result.toString()} ` : '--- '}
      </span>
      {point}
    </p>
  );
};

export default Outcome;
