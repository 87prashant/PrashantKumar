import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Header from '../components/Header'
import Link from 'next/link'
import React from 'react'
// import Main from '../components/Main'
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/Blog">
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
