import styles from "../assets/styles/Schedule.module.css";
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <div className={styles.scheduleChild} />
   
      
      <div className={styles.parent}>
        <div className={styles.div}>2023</div>
        <FaArrowDown style={{ color: 'white' }} />
      </div>
      <div className={styles.eventsCalendar}>Events calendar</div>
      <div className={styles.eventName}>Event name</div>
      <div className={styles.thisIsAnContainer}>
        <p
          className={styles.thisIsAn}
        >{`This is an event description. Phasellus tempus faucibus porta. In luctus maximus enim, nec malesuada tortor accumsan a. Vestibulum euismod vehicula ullamcorper. Nullam sit amet dui elementum, ornare libero eu, fringilla quam. `}</p>
        <p className={styles.thisIsAn}>&nbsp;</p>
        <p
          className={styles.utNisiArcu}
        >{`Ut nisi arcu, convallis eget sem id, interdum ullamcorper neque. Sed ullamcorper pellentesque ex aliquam tempor. Etiam dignissim nulla odio, eget faucibus metus maximus eu. Duis id lacus nisl. Donec porta justo metus, sit amet dignissim enim rhoncus ac. `}</p>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
    <FaArrowRight style={{ color: 'white' }}/>
            <div className={styles.eventNameParent}>
              <div className={styles.eventName1}>Event name</div>
              <div className={styles.venueCityCountry}>
                Venue, city, country
              </div>
            </div>
          </div>
          <div className={styles.jun2023}>11 Jun 2023</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <FaArrowRight style={{ color: 'white' }}/>

            <div className={styles.eventNameParent}>
              <div className={styles.eventName1}>Event name</div>
              <div className={styles.venueCityCountry}>
                Venue, city, country
              </div>
            </div>
          </div>
          <div className={styles.jun2023}>05 Jun 2023</div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <FaArrowRight style={{ color: 'white' }}/>

            <div className={styles.eventNameParent}>
              <div className={styles.eventName1}>Event name</div>
              <div className={styles.venueCityCountry}>
                Venue, city, country
              </div>
            </div>
          </div>
          <div className={styles.jun2023}>05 Jun 2023</div>
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <FaArrowRight style={{ color: 'white' }}/>

            <div className={styles.eventNameParent}>
              <div className={styles.eventName1}>Event name</div>
              <div className={styles.venueCityCountry}>
                Venue, city, country
              </div>
            </div>
          </div>
          <div className={styles.jun20233}>05 Jun 2023</div>
        </div>
        <div className={styles.groupParent3}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild2} />
            <FaArrowRight style={{ color: 'white' }}/>

            <div className={styles.eventNameParent}>
              <div className={styles.eventName1}>Event name</div>
              <div className={styles.venueCityCountry4}>
                Venue, city, country
              </div>
            </div>
          </div>
          <div className={styles.jun20234}>09 Jun 2023</div>
        </div>
      </div>
      <div className={styles.scheduleInner} />
      <div className={styles.date}>{`Date: `}</div>
      <div className={styles.venue}>{`Venue: `}</div>
      <div className={styles.follow}>{`Follow: `}</div>
     
      <div className={styles.scheduleChild2} />
      <div className={styles.june2023}>09 June 2023</div>
    </div>
  );
};

export default Schedule;

