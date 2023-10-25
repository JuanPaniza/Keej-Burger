"use client";
import Image from "next/image";
import Link from "next/link";
function HeaderMenu({ setClickSaucer}) {
  return (
    <nav className=" fixed z-40 w-full top-0 lg:flex-row flex flex-col items-center gap-16 lg:gap-0 pt-8  lg:justify-around lg:pt-4 bg-rojoKB shadow-xl">
      <Link
        href="#"
        onClick={() => setClickSaucer("menu-main")}
        className=" mb-5"
      >
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
            href="#" onClick={() => setClickSaucer("hamburguesas")}
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
      
        

        <Link href="#" onClick={() => setClickSaucer("picadas")}>
          <Image
            className="rounded-md"
            src="/papas-fritas.png"
            alt=" imagen platillo "
            width={30}
            height={30}
            priority
          />
        </Link>
        <Link href="#" onClick={() => setClickSaucer("perros")}>
          <Image
            className="rounded-md"
            src="/hot-dog.png"
            alt=" imagen platillo "
            width={30}
            height={30}
            priority
          />
        </Link>
        <Link href="#" onClick={() => setClickSaucer("bebida")}>
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
    </nav>
  );
}

export default HeaderMenu;
