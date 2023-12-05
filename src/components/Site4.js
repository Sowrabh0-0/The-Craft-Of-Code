import { useCallback } from "react";
import styles from "../assets/styles/Site4.module.css";

const Site11 = () => {
  const onGroupContainer2Click = useCallback(() => {
    // Please sync "Site 5" to the project
  }, []);

  return (
    <div className={styles.site11}>
      <div className={styles.awards}>AWARDS</div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="./images/Line 2.svg" />
        <div className={styles.groupWrapper} onClick={onGroupContainer2Click}>
          <div className={styles.ellipseParent}>
            <div className={styles.groupItem} />
            <div className={styles.rectangleParent}>
              <div className={styles.groupInner} />
              <div className={styles.may2023}>30 May 2023</div>
            </div>
          </div>
        </div>
        <div className={styles.jun2023Parent}>
          <div className={styles.nearFuture}>2 Jun 2023</div>
          <div className={styles.ellipseDiv} />
        </div>
        <div className={styles.oct2023Parent}>
          <div className={styles.nearFuture}>Oct 2023</div>
          <div className={styles.groupChild1} />
        </div>
        <div className={styles.feb2024Parent}>
          <div className={styles.nearFuture}>Feb 2024</div>
          <div className={styles.groupChild1} />
        </div>
        <div className={styles.nearFutureParent}>
          <div className={styles.nearFuture}>Near future</div>
          <div className={styles.groupChild3} />
        </div>
        <div className={styles.farFutureParent}>
          <div className={styles.nearFuture} >Far future?</div>
          <div className={styles.ellipseDiv} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.inception}>INCEPTION</div>
          <div className={styles.xy092022}>xy-09-2022</div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild5} />
        <div className={styles.hoverOver}>
          Hover over / click on a date in the timeline below ;
        </div>
      </div>
      <img
        className={styles.adithyanarayananshankarForHoIcon}
        alt=""
        src="/images/img.png"
      />
    </div>
  );
};

export default Site11;
