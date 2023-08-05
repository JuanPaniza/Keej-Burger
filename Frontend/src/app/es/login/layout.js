
import Head from 'next/head'
import "@/app/globals.css"
import Image from 'next/image'



export const metadata = {
  title: 'KB | Login',
  description: 'Keej Burguer',
  charset: "UTF-8"
}

export default function RootLogin({ children }) {
  
  return (

    <>
      {children}
  
      </>

  )
}
