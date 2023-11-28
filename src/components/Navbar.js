import React, { useState } from 'react';
import styles from '../assets/styles/Navbar.module.css'; 
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.contractionContainer}>as</div>
      <div className={styles.navContainerRemaining}>
        <h1 className={styles.nameContainer}>ADITHYANARAYANAN SHANKAR</h1>
        <div className={styles.navContentSpacer} />
        <div className={styles.navButtonContainer}>
          <button className={styles.navButtonBorder}>Schedule</button>
          <button className={styles.navButton}>Gallery</button>
          <button className={styles.navButton}>Socials</button>
        </div>
      </div>
      <div className={`${styles.hamburgerContainer} ${openNav ? 'open' : ''}`} onClick={() => setOpenNav(prev => !prev)}>
        <RxHamburgerMenu id='ham-open'/>
        <TfiClose id='ham-close'/>
      </div>
    </div>
  );
}

export default NavBar;
