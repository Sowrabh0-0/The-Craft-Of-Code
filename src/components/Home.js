  import React from 'react';
  import styles from '../assets/styles/Home.module.css';
  import NavBar from './Navbar';

  const Home = () => {
    return (
      <div className={styles.homeContainer}>
        <NavBar />
        <div className={styles.remainingSpace}>
          <div className={styles.emptySpace}>
          </div>
          <div className={styles.singer}>Singer</div>
        </div>
      </div>
    );
  };

  export default Home;
