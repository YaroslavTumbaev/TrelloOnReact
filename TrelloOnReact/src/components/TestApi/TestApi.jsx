import React from 'react'
import { useState, useEffect } from 'react'
import styles from './TestApi.module.css'

const TestApi = () => {

    const [data, setData] = useState(undefined)

    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        if (data) {
            setData(
                {
                 name: `${data.results[0].name.first} ${data.results[0].name.last}`,
                 email: data.results[0].email,
                 country: data.results[0].location.country,
                 img: data.results[0].picture.medium
                }
            )
        }
    }

    useEffect(() => {
        getUsers()
        console.log(data);
    }, [])



return (
    <div className={styles.TestApi}>
        {data &&
            <div className={styles.main}>
                <h1>Рандомный пользователь нашего сайта:</h1>
                <div className={styles.userCard}>
                    <div className={styles.userCardHeader}>
                        <img src={data.img} alt="" />
                        <div>
                            <h2>{data.name}</h2>
                            <h4>{data.email}</h4>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
)
}
export default TestApi