import React, { useState, } from 'react'
import styles from './Profile.module.css'
import Reg from './Reg/Reg.jsx'
import TrelloPlus from './TrelloPlus/TrelloPlus.jsx'
import { useLocalStorage } from "@uidotdev/usehooks";



const Profile = () => {
const [user, setUser] = useLocalStorage('user', '')
const [state, setState] = useState(false)
const [subscription, setSubscription] = useLocalStorage('subscription', false)
// const [state, setState] = useState(false)

return (
    <div className={styles.Profile}>
        {!state && !user &&
                <div className={styles.noReg}>Вы не зарегистрированны, пожалуйста<p className={styles.goReg} onClick={()=> setState(true)}>Зарегистрируйтесь</p></div>
        }
        {state &&
            <Reg setUser={setUser} user={user} setState={setState}/>
        }
        {user &&
            <div className={styles.Account}>
                <div  className={styles.userProfile}> 
                    <div className={styles.userName}>Имя пользователя: { user.name }</div>
                    <div className={styles.userEmail}>Email пользователя: { user.email }</div>
                    <div className={styles.subscription}>Подписка: {subscription ? 'Yes' : 'No'}</div>
                    <div className={styles.numberOfCards}>Колличество карточек: </div>
                    <button onClick={() => {
                        setUser('')
                        setState(false)
                        console.log(state);
                    }}>Выйти</button>
                </div>
                <div className={styles.trelloPlus}>
                    <TrelloPlus setSubscription={setSubscription}/>
                </div>
            </div>
        }
    </div>
)
}

export default Profile