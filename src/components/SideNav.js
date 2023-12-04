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
    <div className={styles.site15}>
      <div className={styles.lineParent}>
        <div className={styles.groupChild} />
        <a className={styles.basson} id="1">
          <img className={styles.vectorIcon1} alt="" src="./images/Basson.svg" />

        </a>
        <a className={styles.tabla} id="2" onClick={onTablaClick}>
          <img className={styles.vectorIcon11} alt="" src="./images/Tabla.svg" />
          <img className={styles.vectorIcon12} alt="" src="./images/Tabla.svg" />
          <img className={styles.vectorIcon13} alt="" src="./images/Tabla.svg" />
        </a>./images/Basson.svg
        <a className={styles.tuba} id="3">
          <img className={styles.vectorIcon14} alt="" src="./images/Tuba.svg" />
        </a>
        <img className={styles.frenchHornIcon} alt="" src="./images/French Horn.svg" />
        <img
          className={styles.sitarIcon}
          alt=""
          src="./images/Sitar.svg"
          onClick={onSitarClick}
        />
        <div className={styles.groupItem} />
      </div>
    </div>
  );
};

export default SideNav;
