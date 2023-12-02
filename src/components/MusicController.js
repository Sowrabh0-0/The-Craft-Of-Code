  import React, { useState } from "react";
  import styles from "../assets/styles/MusicController.module.css"; 
  import {IoMdArrowUp} from "react-icons/io";
  import {RiMusicFill} from "react-icons/ri";
  import {IoVolumeLowOutline} from "react-icons/io5";
  import {IoVolumeMedium} from "react-icons/io5";
  import {AiFillStepForward} from "react-icons/ai";
  import {AiFillStepBackward} from "react-icons/ai";
  import {IoPlayCircleOutline} from "react-icons/io5";
  import {IoPauseCircleOutline} from "react-icons/io5";


  export function MusicController() {
    const [openMusicContainer, setOpenMusicContainer] = useState(false);
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(50);
    const [playback, setPlayback] = useState(0);
  
    const toggleMusicContainer = () => {
      setOpenMusicContainer(prev => !prev);
    };
  
    return (
      <div className={`${styles.musicControllerContainer} ${openMusicContainer ? '' : styles.closed}`}>
        <div className={styles.centerContent}>
          <div className={`${styles.primaryRow} ${openMusicContainer ? styles.displayFlex : styles.displayNone}`}>
            <div className={`${styles.textContentColumn} ${openMusicContainer ? styles.displayFlex : styles.displayNone}`}>
              <div className={styles.songTitle}>Name of the song</div>
              <div className={styles.songAuthor}>Adithyanarayanan Shankar</div>
            </div>
            <div className={styles.musicControlsContainer}>
              <div className={styles.iconButtonStepContainer}><AiFillStepBackward /></div>
              <div className={styles.iconButtonContainer} onClick={() => setPlay(prev => !prev)}>
                {play ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
              </div>
              <div className={styles.iconButtonStepContainer}><AiFillStepForward /></div>
            </div>
            <div className={styles.volumeControlContainer}>
              <IoVolumeLowOutline />
              <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(parseInt(e.target.value, 10))} className={styles.audioSlider} />
              <IoVolumeMedium />
            </div>
          </div>
          <div className={`${styles.primaryRow} ${openMusicContainer ? styles.displayFlex : styles.displayNone}`}>
            <div className={styles.playbackControlContainer}>
              <span className={styles.musicPosition}>0:00</span>
              <input type="range" min="0" max="100" value={playback} onChange={(e) => setPlayback(parseInt(e.target.value, 10))} className={styles.audioSlider} />
              <span className={styles.musicPosition}>3:51</span>
            </div>
            <div className={styles.listenToSpotifyButton}>
              <RiMusicFill />
              <div>Listen on Spotify</div>
            </div>
          </div>
        </div>
        <div className={`${styles.openCloseContainer} ${openMusicContainer ? styles.rotate225 : styles.rotate45}`}
            onClick={toggleMusicContainer}>
          <IoMdArrowUp />
        </div>
      </div>
    );
  }
  