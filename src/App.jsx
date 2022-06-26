import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styled from './App.module.css'

import './global.css';

export  function App() {
  return (
    <>
      <Header/>
      <div className={styled.wrapper}>
        <aside>
          Aside
        </aside>
        <main>
          <Post author='Vinicius De Aquino' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu arcu justo.'/>
        </main>
      </div>
    </>
  )
}
