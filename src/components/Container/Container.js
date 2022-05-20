import styles from './Container.module.css';

const Container = ({
  children,
  main,
  blockSide,
  blockMiddle,
  catalogs,
  input,
}) => {
  let style;
  if (main) {
    style = styles.main;
  } else if (blockSide) {
    style = styles.blockSide;
  } else if (blockMiddle) {
    style = styles.blockMiddle;
  } else if (catalogs) {
    style = styles.catalogs;
  } else if (input) {
    style = styles.input;
  }

  return <div className={style}>{children}</div>;
};

export default Container;
