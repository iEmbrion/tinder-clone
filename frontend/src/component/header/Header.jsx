import React from 'react';
import styles from './Header.module.scss';

import tinderLogo from '../../assets/images/tinder-logo.PNG';

import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
    <div className={styles.header}>
      <IconButton>
        <PersonIcon fontSize="large" className={styles.header__icon} />
      </IconButton>
      <IconButton>
        <PersonIcon fontSize="large" className={styles.header__icon} />
      </IconButton>
      <IconButton>
        <PersonIcon fontSize="large" className={styles.header__icon} />
      </IconButton>

      <img className={styles.header__logo} src={tinderLogo} alt="" />

      <IconButton>
        <ForumIcon fontSize="large" className={styles.header__icon} />
      </IconButton>
    </div>
  );
};

export default Header;
