import { useLocalStorage } from '@uidotdev/usehooks'
import { useState } from "react";
import styles from './Home.module.css'

const Home = () => {
    const [user, setUser] = useLocalStorage('user')
    const [subscription, setSubscription] = useLocalStorage('subscription')
    const [desksCount, setDesksCount] = useLocalStorage('desksCount', subscription ? 1000000000 : 5)
    const [desks, setDesks] = useLocalStorage(`desks_${user.name}`, [])
    const [cardMessage, setCardMessage] = useState('')
    const [deskName, setDeskName] = useState('')
    const [buttonId, setButtonId] = useState(0)

    // [
    //     {
    //         card: [{message: сообщение, time: время отправки}],
    //         time: время отправки,
    //         name: название доски,
    //         userName: отправитель
    //     }
    // ]

    const addCard = i => {
        if (cardMessage) {
            const tempDesks = desks
            let hours = String(new Date().getHours())
            let minutes = String(new Date().getMinutes())
            if (hours.split('').length = 0) {
                hours = '0' + hours
            }
            if (minutes.split('').length = 0) {
                minutes = '0' + minutes
            }


            tempDesks.forEach((e, j) => {
                if (i === j) {
                    e.card.push({message: cardMessage, time: `${hours}:${minutes}`, })
                    console.log(e.card);
                    setDesks(tempDesks)
                    console.log(desks);
                }
            })
            setCardMessage('')
        }
    }

    const addDesk = () => {
        if(deskName) {
            if (desksCount) {
                setDesksCount(desksCount - 1)
                const id = new Date().getTime()
                let hours = String(new Date().getHours())
                let minutes = String(new Date().getMinutes())
                if (hours.split('').length = 0) {
                    hours = '0' + hours
                }
                if (minutes.split('').length = 0) {
                    minutes = '0' + minutes
                }
                setDesks(prev => ([...prev, 
                    {
                        card: [],
                        time: `${hours}:${minutes}`,
                        name: deskName,
                        userName: user.name,
                        id: id,
                    }
                ]))
                setDeskName('') 
            }else {
                alert('Бесплатные попытки закончились, поключите trello+ в настройках профиля')
            }
        }
    }

return (
    <div className={styles.Home}>
        {user &&
        <div className={styles.Diplay}>
            <div className={styles.desks}>
                {
                    desks.map((e, i) => {
                        return (
                            <div className={styles.desk} key={i}>
                                <h2>{e.name}</h2>
                                    {
                                        e.card.map((card, index) => {
                                            return (
                                                <div className={styles.card} key={index}>
                                                    <p>{card.message}</p>
                                                    {card.time}
                                                </div>
                                            )
                                        })
                                    }
                                <div className={styles.deskFooter}>
                                 <p className={styles.addCardInput}>{e.time}
                                 <input type="text" onChange={e => setCardMessage(e.target.value)} value={cardMessage}/></p>
                                 <p onClick={() => addCard(i)}>+Add card</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.AddDeskMenu}>
                <input type="text" onChange={e => setDeskName(e.target.value)} value={deskName}/>
                <button onClick={addDesk}>Добавить новую доску</button>
            </div>
            </div>
        }

        {!user &&
           <div>Вы не зарегистрированны</div>
        }
    </div>
)
}
export default Home