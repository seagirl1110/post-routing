import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

function NavComponent() {
  return (
    <nav className={styles.nav_container}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
        to="/articles"
      >
        Статьи
      </NavLink>
    </nav>
  );
}

export default NavComponent;
