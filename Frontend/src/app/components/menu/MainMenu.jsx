import Image from "next/image";

function MainMenu({setClickSaucer}) {
  return (
   <>
   <div className="grid lg:gap-0 gap-9 mt-60 lg:mt-5 pb-32">
        <Image
          className=" w-full h-full lg:h-4/5 lg:mt-10"
          alt="Banner"
          src="/Banner-web.jpg"
          width={4000}
          height={2000}
          priority
        />
        <div className="flex justify-around">
          <Image
            className="w-32 h-full lg:w-3/12 md:w-3/12 lg:h-full"
            alt="Logo KB"
            src="/LOGOKB1.png"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className="grid lg:flex mx-10 gap-7 lg:mt-40 mt-12 lg:mx-11 items-center  justify-items-center lg:mb-40">
          <button
            onClick={()=>setClickSaucer("hamburguesas")}
            className=" h-16 w-full lg:h-44 shadow-xl rounded-xl bg-[url('/hamburguesas.jpg')] bg-cover bg-center  lg:hover:scale-110 transition-all "
          ></button>
          <button
            onClick={()=>setClickSaucer("perros")}
            className=" h-16 w-full lg:h-44 shadow-xl rounded-xl bg-[url('/perros.jpg')] bg-cover bg-center lg:hover:scale-110 transition-all "
            ></button>
          <button
            onClick={()=>setClickSaucer("picadas")}
            className=" h-16 w-full lg:h-44 shadow-xl rounded-xl bg-[url('/picadas.jpg')] bg-cover bg-center lg:hover:scale-110 transition-all "
            ></button>
          <button
            onClick={()=>setClickSaucer("bebida")}
            className=" h-16 w-full  lg:h-44 shadow-xl rounded-xl bg-[url('/bebidas.jpg')] bg-cover bg-center lg:hover:scale-110 transition-all "
            ></button>
        </div>
       
      </div>
   </>
  )
}

export default MainMenu