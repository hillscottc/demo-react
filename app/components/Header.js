import React from 'react'
import styles from './Header.css';
import { Link } from 'react-router'

const Header = () => (
    <header className={styles.header}>
      <h1>
        <Link to="/">demo-react</Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/" activeClassName={styles.active} >Home</Link></li>
          <li><Link to="/cats" activeClassName={styles.active} >Categories</Link></li>
        </ul>
      </nav>
    </header>
);


export default Header;
