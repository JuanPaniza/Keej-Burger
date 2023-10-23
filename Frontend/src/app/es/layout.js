

import "../globals.css"
import Image from 'next/image'



export const metadata = {
  title: 'Keej-Burger | Login',
  description: 'Keej Burguer',
  charset: "UTF-8"
}

export default function RootLogin({ children }) {
  
  return (
    
      <div className='bg' >
      <section className="relative flex flex-wrap h-screen items-center ">

        {children}
        <div className="relative h-72 w-full sm:h-96 lg:h-full lg:w-1/2 lg:bg-cover">
          <Image
            alt="Keej Burger"
            src="/Bg-Login.png"
            width={500}
            height={500}
            className="absolute inset-0 h-full w-full bg-no-repeat bg-cover"
            priority
          />
        </div>
        </section>
  </div>
     
  )
}
