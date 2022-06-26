import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css'

import './global.css';
import { Sidebar } from './components/Sidebar';

export  function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          <Post author='Vinicius De Aquino' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu arcu justo.'/>
        </main>
      </div>
    </>
  )
}
