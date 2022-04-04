import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header'
import { GetAllUsers } from '../../store/action';
import UserList from './UserList'
import styles from './UserList.module.css';

function Users() {
  let users = useSelector((state) => state.data.userList);
  
  if(users.length == 0){
    return null;
  }
  
  return (
    <>
        <Header/>
        <div className='container'> 
          <div className={styles.userHead}>
              <div>
                  Id
              </div>
              <div>
                  Email
              </div>
              <div>
                  Name
              </div>
              <div>
                  Age
              </div>
              <div>
                  Role
              </div>
              <div>
                  Status
              </div>
          </div>
        </div>
        {
          (users).users.map((user) => {
            return <UserList key={user.id} user={user}/>
          })
        }
    </>
  )
}

export default Users