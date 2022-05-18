import styles from './InnerInputsContainer.module.css';

const InnerInputsContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default InnerInputsContainer;
