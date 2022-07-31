import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
// import "../scss/style.scss"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp