  import React from 'react';
  import styles from '../assets/styles/Home.module.css';
  import NavBar from './Navbar';
import { MusicController } from './MusicController';
<<<<<<< Updated upstream
import Gallery from './Gallery';
import Schedule from './Schedule';
import Experience from './Experience';
=======


>>>>>>> Stashed changes
  const Home = () => {
    return (
      <div className={styles.homeContainer}>
        <NavBar />
        <div className={styles.remainingSpace}>
          <div className={styles.emptySpace}>
            <MusicController/>
          </div>
          <div className={styles.singer}>Singer</div>
        </div>
<<<<<<< Updated upstream
        <Schedule/>
      <Experience/>
=======
>>>>>>> Stashed changes
      </div>
    );
  };

  export default Home;
