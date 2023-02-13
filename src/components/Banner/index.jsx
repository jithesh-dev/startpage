import styles from "./style.module.scss";
import BannerImage from "@/assets/bg/bg1.jpg";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={BannerImage} />
    </div>
  );
};

export default Banner;
