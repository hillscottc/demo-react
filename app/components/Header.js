import React from 'react'
import styles from './Header.css';
import { Link } from 'react-router'

const Header = () => (
    <header className={styles.header}>
      <h1>
        <Link to="/">trivnode-react</Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/cats" activeClassName={styles.active} >cats</Link></li>
          <li><Link to="/clues" activeClassName={styles.active}>clues</Link></li>
          <li><Link to="/about" activeClassName={styles.active}>about</Link></li>
        </ul>
      </nav>
    </header>
);


export default Header;
