"use client";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className=" bg-orange-200 lg:h-full h-screen md:h-full md:pb-20">
      <div className="grid lg:gap-0 gap-9  ">
        <Image
          className=" w-full h-full lg:h-4/5"
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
            src="/LOGOKB.png"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className="grid lg:flex mx-10 gap-7 lg:mt-40 mt-12 lg:mx-11 items-center  justify-items-center lg:mb-32">
          <Link
            href="/menu/hamburguesas"
            className=" h-16 w-full lg:h-44 shadow-xl rounded-xl bg-[url('/hamburguesas.jpg')] bg-cover bg-center  lg:hover:scale-110 transition-all "
          ></Link>
          <Link
            href="/menu/perros"
            className=" h-16 w-full lg:h-44 shadow-xl rounded-xl bg-[url('/perros.jpg')] bg-cover bg-center lg:hover:scale-110 transition-all "
            ></Link>
          <Link
            href="/menu/picadas"
            className=" h-16 w-full lg:h-44 shadow-xl rounded-xl bg-[url('/picadas.jpg')] bg-cover bg-center lg:hover:scale-110 transition-all "
            ></Link>
          <Link
            href="/menu/bebidas"
            className=" h-16 w-full  lg:h-44 shadow-xl rounded-xl bg-[url('/bebidas.jpg')] bg-cover bg-center lg:hover:scale-110 transition-all "
            ></Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
