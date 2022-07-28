import Header from '../components/Header'
import {Face} from '@mui/icons-material'
import Main from "../components/Main"
import React from 'react'

export default function Home() {
  return (
    <div>
      <Header/>
      <Main>
      <Face/>
        this is Home page
      </Main>
    </div>
  );
}
