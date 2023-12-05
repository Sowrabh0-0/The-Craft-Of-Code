import styles from "../assets/styles/Site7.module.css";
import SideNavbar from "./SideNavbar";

const Site7 = () => {
  return (
    <div className={styles.site13} id="6">
      <SideNavbar/>
      <div className={styles.education}>EDUCATION</div>
      <div className={styles.nameOfDegreeParent}>
        <div className={styles.nameOfDegree}>Name of degree</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.nameOfDegreeGroup}>
        <div className={styles.nameOfDegree}>Name of degree</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.nameOfDegreeContainer}>
        <div className={styles.nameOfDegree}>Name of degree</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.nameOfDegree}>Name of degree</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.nameOfDegreeParent1}>
        <b className={styles.nameOfDegree4}>Name of degree</b>
        <div className={styles.div}>1928 - 1931</div>
        <div className={styles.aCoupleOf}>
          A couple of lines about the degree and any merit / distinction /
          notable incident
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
      </div>
      <div className={styles.awardRecognitionContainer}>
        <ul className={styles.awardRecognitionGoesHere}>
          <li className={styles.awardRecognition}>
            Award / recognition goes here
          </li>
          <li className={styles.awardRecognition}>
            Award / recognition goes here
          </li>
          <li>Award / recognition goes here</li>
        </ul>
      </div>
    </div>
  );
};

export default Site7;
