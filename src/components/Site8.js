import { Button } from "@mui/material";
import styles from "../assets/styles/Site8.module.css";

const Site8 = () => {
  return (
    <div className={styles.site14}>
      <div className={styles.getInTouchContainer}>
        <span>GET IN TOUCH</span>
        <span className={styles.span}>!</span>
      </div>
      <img className={styles.site14Child} alt="" src="./images/Site8.png" />
      <div className={styles.rectangleParent}>
        <input
          className={styles.groupChild}
          placeholder="First Name"
          type="text"
        />
        <div className={styles.firstNameParent}>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <input
          className={styles.groupItem}
          placeholder="Last Name"
          type="text" 
        />
      </div>
      <div className={styles.rectangleContainer}>
        <textarea
          className={styles.groupInner}
          placeholder="Leave a message here :)"
        />
      </div>
      <div className={styles.groupDiv}>
        <input className={styles.groupItem} placeholder="Email" type="email" />
      </div>
      <div className={styles.rectangleParent1}>
        <input className={styles.groupItem} placeholder="Phone" type="tel" />
      </div>
      <Button
        className={styles.site14Item}
        color="primary"
        variant="contained"
        href="./Send Button"
      >
        Send ↳
      </Button>
    </div>
  );
};

export default Site8;
