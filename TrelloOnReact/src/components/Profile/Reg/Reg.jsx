import React, { useState, } from 'react'
import styles from './Reg.module.css'

const Reg = ({setUser, setState}) => {

    const [data, setData] = useState({name: '', pass: '', email: ''})
    const [color, setColor] = useState(['white', 'white', 'white'])

    const error = (i) => {
        if (i === 0) {
            setColor(['rgba(255, 0, 0, 0.535)', 'white', 'white'])
            setTimeout(() => {
                setColor(['white', 'white', 'white'])
            }, 1500);
        }else if (i === 1) {
            setColor(['white', 'rgba(255, 0, 0, 0.535)', 'white'])
            setTimeout(() => {
                setColor(['white', 'white', 'white'])
            }, 1500);
        }else if (i === 2) {
            setColor(['white', 'white', 'rgba(255, 0, 0, 0.535)'])
            setTimeout(() => {
                setColor(['white', 'white', 'white'])
            }, 1500);
        }else {
            setColor(['rgba(255, 0, 0, 0.535)', 'rgba(255, 0, 0, 0.535)', 'rgba(255, 0, 0, 0.535)'])
            setTimeout(() => {
                setColor(['white', 'white', 'white'])
            }, 1500);
        }
    }

    const reg = () => {
            if (data.name) {
                if (data.pass.length >= 8) {
                    if (data.email) {
                        setUser({name: data.name, pass: data.pass, email: data.email})
                        setState(false)
                    } else {
                        error(2)
                    }
                }else {
                    error(1)
                }
            }else {
                error(0)
                
            }
        }
    

return (
    <div className={styles.Reg}>
        <input placeholder='Name' type="text"
         onChange={e => setData(prev => ({...prev, name: e.target.value}))} value={data.name}
         style={{
            backgroundColor: color[0]
         }}
         />
        <input placeholder='Password' type="text" 
        onChange={e => setData(prev => ({...prev, pass: e.target.value}))} value={data.pass}
        style={{
            backgroundColor: color[1]
         }}
        />
        <input placeholder='Email' type="text" 
        onChange={e => setData(prev => ({...prev, email: e.target.value}))} value={data.email}
        style={{
            backgroundColor: color[2]
         }}
        />
        <button onClick={reg}>Зарегистрироваться</button>
    </div>
)
}

export default Reg