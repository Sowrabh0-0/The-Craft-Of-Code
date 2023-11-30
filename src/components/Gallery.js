import styles from "../assets/styles/Gallery.module.css";
import React from "react";



const Gallery = () => {
  return (
    <div className={styles.galleryParent}>
        <img className={styles.galleryItem} alt="" src="/rectangle-47@2x.png" />
        <div className={styles.galleryInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.galleryChild1} />
        <div className={styles.galleryChild2} />
        <div className={styles.galleryChild3} />
        <div className={styles.galleryChild4} />
        <div className={styles.galleryChild5} />
        <div className={styles.galleryChild6} />
        <div className={styles.galleryChild7} />
        <div className={styles.galleryChild8} />
        <div className={styles.galleryChild9} />
        <div className={styles.groupParent}>
          <div className={styles.locationAndMapLocationParent}>
            <img
              className={styles.locationAndMapLocation}
              alt=""
              src="/location-and-map--location.svg"
            />
            <div className={styles.locationCity}>Location, city</div>
          </div>
          <div className={styles.title}>Title</div>
          <div className={styles.thisIsA}>
            This is a small description for this image
          </div>
        </div>
      </div>
  );
};

export default Gallery;