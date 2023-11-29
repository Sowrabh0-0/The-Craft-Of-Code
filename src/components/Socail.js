import styles from "../assets/styles/Social.module.css";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.galleryParent}>
        <b className={styles.gallery}>Gallery</b>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.schedule}>Schedule</div>
        </div>
        <b className={styles.socials1}>Socials</b>
      </div>
      <div className={styles.socialsChild} />
      <div className={styles.adithyanarayanan}>ADITHYANARAYANAN</div>
      <div className={styles.shankar}>SHANKAR</div>
      <b className={styles.as}>as</b>
    </div>
  );
};

export default Socials;
