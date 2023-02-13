import styles from "./style.module.scss";

const BoxWrapper = ({ children }) => {
  return <div className={styles.boxWrapper}>{children}</div>;
};

export default BoxWrapper;
