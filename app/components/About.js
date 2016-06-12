import React from 'react'
import styles from './About.css';

const About = () => (
    <div className={styles.about}>
      <header>About</header>
      <h3>Clues</h3>
        <p><span className={styles.code}>/api/clues/:limit?</span> --random clues with optional limit (10)</p>
        <ul>
          <li><a href="/api/clues">/api/clues</a></li>
          <li><a href="/api/clues/2">/api/clues/2</a></li>
        </ul>
      <h3>Categories</h3>
      <p><span className={styles.code}>/api/cats/:limit?</span> --random categories with optional limit (20)</p>
      <ul>
        <li><a href="/api/cats">/api/cats</a></li>
        <li><a href="/api/cats/2">/api/cats/2</a></li>
      </ul>
      <h3>Clues by Category</h3>
      <p><span className={styles.code}>/api/clues/cat/:cat_id</span></p>
      <ul>
        <li><a href="/api/clues/cat/807">/api/clues/cat/807</a></li>
        <li><a href="/api/clues/cat/14300">/api/clues/cat/14300</a></li>
      </ul>
    </div>
);


export default About;
