import styles from "../assets/styles/SideNav.module.css";

const SideNavbar = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutInner}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupChild} />
            <a className={styles.basson} href="#3">
              <img className={styles.vectorIcon1} alt="" src="./Basson.svg" />
            </a>
            <a className={styles.tabla} href="#4">
              <img className={styles.vectorIcon11} alt="" src="./Tabla.svg" />
            </a>
            <a className={styles.tuba}href="#5">
              <img className={styles.vectorIcon14} alt="" src="./Tuba.svg" />
            </a>
            <a className={styles.frenchHorn}href="#6">
              <img className={styles.vectorIcon21} alt="" src="/French Horn.svg" />
            </a>
            <a className={styles.sitar}href="#7">
              <img className={styles.vectorIcon31} alt="" src="/Sitar.svg" />
            </a>
            <div className={styles.groupItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
