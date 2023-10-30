import React from 'react'
import styles from './Menu.module.css'

const Menu = ( { newComment, setNewComment, addComment, delComment } ) => {
return (
    <div className={styles.Menu}>
        <input type="text" onChange={e => setNewComment(e.target.value)} value={newComment}/>
        <button onClick={addComment}>Отправить</button>
        <button onClick={delComment}>Удалить</button>
    </div>
)
}
export default Menu