import React from 'react';
import styles from '../assets/styles/Home.module.css';
import { MusicController } from './MusicController';
import Site3 from './Site3';


  const Home = () => {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.remainingSpace}>
          <div className={styles.emptySpace}>
            <MusicController/>
          </div>
          <div className={styles.singer}>Singer</div>
        </div>
        <Site3/>
      </div>
    );
  };

  export default Home;
