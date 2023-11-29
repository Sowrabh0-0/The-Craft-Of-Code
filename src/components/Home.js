  import React from 'react';
  import styles from '../assets/styles/Home.module.css';
  import NavBar from './Navbar';
import Gallery from './Gallery';
  const Home = () => {
    return (
      <div className={styles.homeContainer}>
        <NavBar />
        <div className={styles.remainingSpace}>
          <div className={styles.emptySpace}>
          </div>
          <div className={styles.singer}>Singer</div>
      
        </div>
        <Gallery/>
      </div>
    );
  };

  export default Home;
