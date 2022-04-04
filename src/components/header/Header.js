import React from 'react'
import { useSelector } from 'react-redux';

import styles from './Header.module.css';
function Header() {
  const data = useSelector(state => state.data.user);

  return (
    <header>
        <div className='container'>
            <div className={styles.header__container}>
                <h1>Список всех пользователей &#8595;</h1>
                <p>{data.name} | {data.email}</p>
            </div>
        </div>
    </header>
  )
}

export default Header