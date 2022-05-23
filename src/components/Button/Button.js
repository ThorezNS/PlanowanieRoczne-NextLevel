import styles from './Button.module.css';

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
