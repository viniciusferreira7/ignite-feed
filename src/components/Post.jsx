import React from 'react'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
  return (
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/83302144?v=4"/>
        <div className={styles.authorInfo}>
          <strong>Vinicius De Aquino</strong>
          <span>Front End Developer</span>
        </div>
      </div>

      <time title="26 de Junho ás 13:30" dateTime="2022-06-26">Publicado há 1h</time>
    </header>
    <div className={styles.content}>
      <p>Fala galeraa👋</p>

     <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

     <p><a href=''>jane.design/doctorcare</a></p>

     <p>
      <a href=''>#novoprojeto</a>{' '}
       <a href=''>#nlw</a>{' '}
       <a href=''>#rocketseat</a>{' '}
      </p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea placeholder='Deixe um comentário'/>
     <footer>
      <button type="submit">Publicar</button>
     </footer>
    </form>
    <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
   </article>
  )
}
