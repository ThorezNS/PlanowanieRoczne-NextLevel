import styles from './InputField.module.css';

const InputField = ({ placeholder }) => {
  return (
    <input className={styles.input} type="number" placeholder={placeholder} />
  );
};

export default InputField;
