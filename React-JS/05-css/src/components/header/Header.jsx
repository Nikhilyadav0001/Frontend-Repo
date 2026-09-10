import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>My first react app</h1>
            <button className={styles.btn}>Click me</button>
        </div>
    )
}

export default Header