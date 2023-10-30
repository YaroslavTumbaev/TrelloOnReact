import React from 'react'
import styles from './TrelloPlus.module.css'

const TrelloPlus = ({ setSubscription }) => {
return (
    <div className={styles.TrelloPlus}>
        Подключить подписку Trello+?
        <button onClick={() => setSubscription(true)}>Подключить</button>
    </div>
)
}
export default TrelloPlus