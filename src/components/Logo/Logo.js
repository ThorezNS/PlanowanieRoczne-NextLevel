import styles from './Logo.module.css';
import logo from '../../assets/logo.jpg';

const Logo = ({ alt }) => {
  return <img className={styles.logo} src={logo} alt={alt} />;
};

export default Logo;
