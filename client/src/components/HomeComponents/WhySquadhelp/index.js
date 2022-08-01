import React from 'react';
import styles from './WhySquadhelp.module.sass';
import articles from './WhySquadhelp.json';
import CONSTANTS from '../../../constants';

const WhySquadhelp = () => {
  const showArticle = ({ img, alt, heading, content }, i) => {
    <article>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`} alt={alt} />
      <h3>{heading}</h3>
      <p>{content}</p>
    </article>;
  };
  return (
    <div className={styles.container__description}>
      <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
      <div className={styles.cardContainer}>{articles.map(showArticle)}</div>
    </div>
  );
};

export default WhySquadhelp;
