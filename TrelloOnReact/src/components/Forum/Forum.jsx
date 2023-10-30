import React, { useState } from 'react'
import styles from './Forum.module.css'
import Display from './Display/Display.jsx'
import Menu from './Menu/Menu.jsx'
import { useLocalStorage } from '@uidotdev/usehooks'

const Forum = () => {

    const [newComent, setNewComent] = useState('')
    const [coments, setComents] = useLocalStorage('coments', [])
    const [user, setUser] = useLocalStorage('user')

    const addComent = () => {
        if (newComent) {
            setComents(prev => ([...prev, {text: newComent, userName: user.name}]))
            setNewComent('')
        }
    }

    const delComent = () => {
        const result = []
        coments.forEach(e => {
            if (e.userName !== user.name) {
                result.push(e)
            }
        })
        setComents(result)
    }


    return (
        <div className={styles.Forum}>
            <Display coments={coments}/>
            <Menu newComment={newComent} setNewComment={setNewComent}
            addComment={addComent} delComment={delComent}/>
        </div>
    )
}
export default Forum