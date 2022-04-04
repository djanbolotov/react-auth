import React from 'react'
import styles from './CustomInput.module.css'

function CustomInput({input, meta, ...props}) {
  return (
    <div className={styles.formControl + " " +  (meta.touched && meta.error ? styles.error : "")}>
      <div>
        <input {...input} {...props}/>
      </div>
      {meta.touched && meta.error && <span> {meta.error} </span>}
    </div>
  )
}

export default CustomInput