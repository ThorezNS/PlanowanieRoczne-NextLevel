import styles from './Label.module.css';

const Label = ({ text }) => {
  return <p className={styles.label}>{text}</p>;
};

export default Label;
