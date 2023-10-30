import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
return (
    <div className={styles.Navigation}>
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg" alt="" />
        <div className={styles.links}>
            <Link to="/"><button>Home</button></Link>
            <Link to="/profile"><button className={styles.btn}>Profile</button></Link>
            <Link to="/forum"><button className={styles.btn}>Forum</button></Link>
            <Link to="/api"><button className={styles.btn}>Api</button></Link>
        </div>
    </div>
)
}
export default Navigation