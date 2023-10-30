import React from 'react'
import styles from './Display.module.css'

const Display = ({ coments }) => {
return (
    <div className={styles.Display}>
        {
            coments.map((e, i) => (
                <div className={styles.coment} key={i}>
                    <p className={styles.text}>{e.text}</p>
                    <div className={styles.userName}>{e.userName}</div>
                </div>
            ))
        }
    </div>
)
}
export default Display