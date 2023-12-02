// Home.js
import React from 'react';
import { MusicController } from './MusicController';
import styles from '../assets/styles/Home.module.css';

const Home = ({ showMusicController }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.remainingSpace}>
        <div className={styles.emptySpace}>
          {showMusicController && <MusicController />}
        </div>
        <div className={styles.singer}>Singer</div>
      </div>
    </div>
  );
};

export default Home;
