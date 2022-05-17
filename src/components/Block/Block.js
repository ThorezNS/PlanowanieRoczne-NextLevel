import styles from './Block.module.css';

const Block = ({ children, middle }) => {
  return <div className={middle ? styles.middle : styles.side}>{children}</div>;
};

export default Block;
