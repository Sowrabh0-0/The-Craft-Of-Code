import React, { useState } from 'react';
import styles from '../assets/styles/Navbar.module.css'; 
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.contractionContainer}>as</div>
      <div className={styles.nameContainer}>
        <h1>ADITHYANARAYANAN SHANKAR</h1>
      </div>
      <div className={styles.navButtonContainer}>
        <a href="/schedule" className={styles.navButtonBorder}>Schedule</a>
        <a href="/gallery" className={styles.navButton}>Gallery</a>
        <a href="/socials" className={styles.navButton}>Socials</a>
      </div>
      <div className={`${styles.hamburgerContainer} ${openNav ? 'open' : ''}`} onClick={() => setOpenNav(prev => !prev)}>
        <RxHamburgerMenu id='ham-open'/>
        <TfiClose id='ham-close'/>
      </div>
    </div>
  );
}

export default NavBar;
