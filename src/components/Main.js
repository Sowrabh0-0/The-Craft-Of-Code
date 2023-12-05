// Main.js
import React from 'react';
import Home from './Home'; 
import styles from '../assets/styles/Main.module.css'; 
import Site3 from './Site3';
import Site4 from './Site4';
import Site6 from './Site6';
import Site7 from './Site7';
import Site8 from './Site8';
import SideNav from './SideNav';

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <Home showMusicController={true} />
      <Site3 />
      <Site4/>
      <Site6/>
      <Site7/>
      <Site8/>

    </div>
  );
};

export default Main;
