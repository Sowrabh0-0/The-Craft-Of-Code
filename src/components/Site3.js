import styles from "../assets/styles/Site3.module.css";
import SideNavbar from "./SideNavbar";

const Site3 = () => {
  return (
    <div className={styles.site10} id="3">
      <SideNavbar/>
      <img
        className={styles.adithyanarayananshankar4RemoIcon}
        alt=""
        src="./images/Site3.png"
      />
      <div className={styles.iAmAdithyanarayananContainer}>
        <p className={styles.iAmAdithyanarayanan}>
          I am Adithyanarayanan Shankar,
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.aSingerVoiceArtistAndMus}>
          <span>
            <span className={styles.aSingerVoice}>
              a singer, voice artist and musician based out of London, the United Kingdom
            </span>
          </span>
        </p>
      </div>
      <div
        className={styles.iWorkAs}
      >{`I work as a Project Manager for a tech giant in the IT field and practice content writing and psychology out of passion. I have more than three years of experience in the field of writing and have managed various types of projects for both SMBs and Corporates. `}</div>
    </div>
  );
};

export default Site3;
