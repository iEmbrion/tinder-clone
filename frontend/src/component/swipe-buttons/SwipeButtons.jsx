import React from 'react';

import styles from './SwipeButtons.module.scss';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
  return (
    <div className={styles.swipeButtons}>
      <IconButton className={styles.swipeButtons__replay}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtons__close}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtons__star}>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtons__favorite}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtons__flash}>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
