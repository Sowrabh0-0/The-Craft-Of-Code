import {
    InputAdornment,
    Icon,
    IconButton,
    Button,
    OutlinedInput,
  } from "@mui/material";
  import TextField from '@mui/material/TextField';
  import styles from "../assets/styles/Site8.module.css";
  
  const Site8 = () => {
    return (
      <div className={styles.site14}>
        <div className={styles.getInTouchContainer}>
          <span>GET IN TOUCH</span>
          <span className={styles.span}>!</span>
        </div>
        <img className={styles.site14Child} alt="" src="/group-1064@2x.png" />
        <div className={styles.rectangleParent}>
          <TextField
            className={styles.groupChild}
            color="primary"
            label="First Name"
            placeholder="First Name"
            required={true}
            fullWidth={true}
            variant="outlined"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <TextField
            className={styles.groupChild}
            color="primary"
            label="Last Name"
            placeholder="Last Name"
            fullWidth={true}
            variant="outlined"
          />
        </div>
        <div className={styles.rectangleContainer}>
          <textarea
            className={styles.groupInner}
            placeholder="Leave a message here :)"
            required={true}
            autoFocus={true}
          />
        </div>
        <div className={styles.groupDiv}>
          <TextField
            className={styles.groupChild}
            color="primary"
            label="Email"
            placeholder="Email"
            required={true}
            fullWidth={true}
            variant="outlined"
            type="email"
          />
        </div>
        <div className={styles.rectangleParent1}>
          <TextField
            className={styles.groupChild}
            color="primary"
            label="Phone"
            placeholder="Phone"
            required={true}
            fullWidth={true}
            variant="outlined"
            type="tel"
          />
        </div>
        <Button
          className={styles.site14Item}
          color="primary"
          variant="contained"
          href="./Send Button"
        >
          Send ↳
        </Button>
      </div>
    );
  };
  
  export default Site8;
  