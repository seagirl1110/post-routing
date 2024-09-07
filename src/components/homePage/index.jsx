import React from 'react';
import styles from './styles.module.css';

function HomePage() {
  return (
    <div className={styles.home_container}>
      <h2 className={styles.title}>Главная страница</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum vel
        quibusdam exercitationem amet unde minus officiis quia quasi quod
        doloribus!
      </p>
    </div>
  );
}
export default HomePage;
