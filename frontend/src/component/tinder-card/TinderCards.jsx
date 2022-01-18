import React, { useState, useEffect } from 'react';

import styles from './TinderCards.module.scss';
import axios from '../../axios';

import TinderCard from 'react-tinder-card';

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/api/v1/users');
      setPeople(req.data.data.users);
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = name => {
    console.log(`${name} left the screen!`);
  };

  return (
    <div className={styles.tinderCards}>
      <div className={styles.tinderCards__cardContainer}>
        {people.map(({ name, imgUrl }) => {
          return (
            <TinderCard
              className={styles.swipe}
              key={name}
              preventSwipe={['up', 'down']}
              onSwipe={dir => swiped(dir, name)}
              onCardLeftScreen={() => outOfFrame(name)}
            >
              {
                <div className={styles.card}>
                  <img className={styles.card__image} src={imgUrl} alt="" />
                  <h3 className={styles.card__name}>{name}</h3>
                </div>
              }
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default TinderCards;
