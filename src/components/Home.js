  import React from 'react';
  import styles from '../assets/styles/Home.module.css';
  import NavBar from './Navbar';
import { MusicController } from './MusicController';
import Schedule from './Schedule';
import Experience from './Experience';


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
        <Schedule/>
      <Experience/>
      </div>
    );
  };

  export default Home;
