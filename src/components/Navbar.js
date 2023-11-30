import React, { useState } from 'react';
import styles from '../assets/styles/Navbar.module.css'; 
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.contractionContainer}>as</div>
      <div className={styles.nameContainer}>
        <h1>ADITHYANARAYANAN SHANKAR</h1>
      </div>
      <div className={styles.navButtonContainer}>
        <Link to='/schedule'><button className={styles.navButtonBorder}>Schedule</button></Link>
        <Link to='/gallery'><button className={styles.navButton}>Gallery</button></Link>
        <Link to='/socials'><button className={styles.navButton}>Socials</button></Link>
      </div>
      <div className={`${styles.hamburgerContainer} ${openNav ? 'open' : ''}`} onClick={() => setOpenNav(prev => !prev)}>
        <RxHamburgerMenu id='ham-open'/>
        <TfiClose id='ham-close'/>
      </div>
    </div>
  );
}

export default NavBar;
