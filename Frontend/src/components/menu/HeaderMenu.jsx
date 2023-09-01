"use client"
import Image from "next/image"
import { useEffect , useState } from "react"
import Link from "next/link";

function HeaderMenu() {
  const [clickPlatillo, setClickPatillo] = useState('');

  function handleClick (e){

    setClickPatillo(e.target.name)

  }
  return (
    <div className=" fixed w-full top-0 lg:flex-row flex flex-col items-center gap-16 lg:gap-0 pt-8  lg:justify-around lg:pt-4 bg-orange-600 shadow-xl">
    <Link className=" mb-5" href="/menu">
    <Image
      className="  w-32 h-full "
      alt="Logo KB"
      src="/LOGOKB.png"
      width={100}
      height={100}
      priority
    />
    </Link>
  <div className=" flex items-center gap-3 mb-5">
  <Link
    href="/menu/hamburguesas"
      >
        <Image
        className="rounded-md"
            src="/hamburguesa-con-queso.png"
            alt=" imagen platillo "
            width={30}
            height={30}
            priority
        />
      </Link>
      <Link 
 
 href="/menu/picadas"
      >
        <Image
        className="rounded-md"
            src="/papas-fritas.png"
            alt=" imagen platillo "
            width={30}
            height={30}
            priority
        />
      </Link>
      <Link 

href="/menu/perros"
      >
        <Image
        className="rounded-md"
            src="/hot-dog.png"
            alt=" imagen platillo "
            width={30}
            height={30}
            priority
        />
      </Link>
      <Link 

href="/menu/bebidas"
>
  <Image
  className="rounded-md"
      src="/soda.png"
      alt=" imagen platillo "
      width={30}
      height={30}
      priority
  />
</Link>
  </div>
</div>
  )
}

export default  HeaderMenu