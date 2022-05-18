import styles from './InputsContainer.module.css';

const InputsContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default InputsContainer;
