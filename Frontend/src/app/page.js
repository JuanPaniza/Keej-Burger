
import Link from "next/link";
export default function Home() {
  return (
    <main>
          <div className="bg-principal grid-enlaces">
            <Link
              className=" grid-enlace-login text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              href="/es/login"
            >
              {" "}
              Iniciar sesión
            </Link>
            <Link
              className=" grid-enlace-menu  text-white bg-gradient-to-r from-orange-500  via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              href="/menu"
            >
              {" "}
              Menú
            </Link>
          </div>
    </main>
  );
}
