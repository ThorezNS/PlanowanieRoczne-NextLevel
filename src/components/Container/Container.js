import styles from './Container.module.css';

const Container = ({ children, main, block, blockMiddle, catalogs, input }) => {
  let style;
  if (main) {
    style = styles.main;
  } else if (block) {
    style = blockMiddle ? styles.blockMiddle : styles.blockSide;
  } else if (catalogs) {
    style = styles.catalogs;
  } else if (input) {
    style = styles.input;
  }

  return <div className={style}>{children}</div>;
};

export default Container;
