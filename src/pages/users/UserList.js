import React from 'react'

import styles from './UserList.module.css';

function UserList({user}) {
  return (
    <div className='container'>
        <div className={styles.userList}>
            <div>
                {user.id}
            </div>
            <div>
                {user.email}
            </div>
            <div>
                {user.name}
            </div>
            <div>
                {user.age}
            </div>
            <div>
                {user.role}
            </div>
            <div>
                {user.status}
            </div>
        </div>
    </div>
  )
}

export default UserList