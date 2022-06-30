import React from 'react'

import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ avatarUrl, content, onDeleteComment}) {

  function handleDeleteComment ()  {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}  src={avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time title="26 de Junho ás 13:30" dateTime="2022-06-26">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
