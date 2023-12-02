import styles from "../assets/styles/Site3.module.css";

const Site10 = () => {
  return (
    <div className={styles.site10}>
      <img
        className={styles.adithyanarayananshankar4RemoIcon}
        alt=""
        src="/adithyanarayananshankar4removebgpreview-1@2x.png"
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

export default Site10;
