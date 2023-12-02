import { useCallback } from "react";
import styles from "../assets/styles/SideNav.module.css";

const SideNav = () => {
  const onTablaClick = useCallback(() => {
    // Please sync "Site 4" to the project
  }, []);

  const onSitarClick = useCallback(() => {
    // Please sync "Site 8" to the project
  }, []);

  return (
    <div className={styles.lineParent}>
      <div className={styles.groupChild} />
      <a className={styles.basson} id>
        <img className={styles.vectorIcon1} alt="" src="/../assets/images/Basson.svg" />
      </a>
      <a className={styles.tabla} id="2" onClick={onTablaClick}>
        <img className={styles.vectorIcon11} alt="" src="/vector11.svg" />
        <img className={styles.vectorIcon12} alt="" src="/vector12.svg" />
        <img className={styles.vectorIcon13} alt="" src="/vector13.svg" />
      </a>
      <a className={styles.tuba} id="3">
        <img className={styles.vectorIcon14} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon15} alt="" src="/vector15.svg" />
        <img className={styles.vectorIcon16} alt="" src="/vector16.svg" />
        <img className={styles.vectorIcon17} alt="" src="/vector17.svg" />
        <img className={styles.vectorIcon18} alt="" src="/vector18.svg" />
        <img className={styles.vectorIcon19} alt="" src="/vector19.svg" />
      </a>
      <img className={styles.frenchHornIcon} alt="" src="/french-horn.svg" />
      <img
        className={styles.sitarIcon}
        alt=""
        src="/sitar.svg"
        onClick={onSitarClick}
      />
      <div className={styles.groupItem} />
    </div>
  );
};

export default SideNav;
