import Image from "next/image";
import Link from "next/link";

function FooterMenu() {
  return (
    <footer className=" relative bg-orange-600 lg:grid lg:grid-cols-5">
      <div className="relative block h-40  lg:col-span-2 lg:h-full">
        <Image
          className="  absolute inset-0 h-full w-full  object-cover bg-bottom "
          alt="Logo KB"
          src="/hamburguesaFooter.jpg"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <Image
              className="  w-32 h-20 mb-4 "
              alt="Logo KB"
              src="/LOGOKB.png"
              width={100}
              height={100}
              priority
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-white">
                Contacto
              </span>

              <Link
                href="https://wa.me/message/MSYI5256C77MO1"
                className=" text-2xl font-medium text-white hover:opacity-75 sm:text-3xl flex gap-3 mt-3 "
              > 
              <div className=" flex">
                <Image className=" h-auto w-auto"
                    alt="Logo-whatsapp"
                    src="/whatsapp.png"
                    width={35}
                    height={30}
                    priority
                  />
                  </div>
                   305 2360997
              </Link>
            </div>

            <ul className="mt-8 space-y-1 text-sm text-gray-100">
              <li>Lunes, Miercoles y Jueves: 6pm - 11:00pm</li>
              <li>Viernes a Domingos: 6pm - 11:30pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
             
              <li>
                <Link
                  href="https://www.instagram.com/keejburger/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="#ffff"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.tiktok.com/@keejburger1?_t=8fYEeOE1mlB&_r=1"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-300 transition hover:opacity-75"
                >
                  <span className="sr-only">Tiktok</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width="22"
                    height="22"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#ffff"
                      stroke="none"
                    >
                      <path d="M2652 5103 c-18 -9 -43 -30 -55 -47 l-22 -31 -5 -1730 -5 -1730 -23 -65 c-67 -184 -210 -320 -398 -376 -84 -25 -219 -24 -309 4 -244 74 -406 289 -408 542 -1 168 51 291 172 411 109 108 200 149 370 168 88 10 117 24 155 75 20 27 21 39 21 474 0 416 -1 449 -18 477 -40 64 -57 70 -212 69 -266 -3 -560 -92 -804 -246 -323 -202 -583 -531 -701 -887 -172 -518 -92 -1060 222 -1506 81 -115 278 -312 393 -393 610 -430 1418 -412 2000 43 285 223 496 541 589 886 54 202 56 240 56 1098 0 435 2 791 4 791 1 0 47 -21 102 -46 133 -62 303 -118 454 -148 143 -29 389 -52 444 -42 48 9 103 58 116 104 6 22 10 201 10 452 0 411 0 416 -23 460 -32 64 -65 79 -199 90 -139 12 -235 38 -353 95 -247 119 -427 330 -509 595 -16 50 -32 138 -40 213 -14 141 -26 168 -87 199 -31 16 -74 18 -469 18 -380 0 -439 -2 -468 -17z m728 -288 c0 -24 36 -175 57 -240 102 -317 344 -596 648 -748 91 -45 240 -94 335 -110 l75 -13 3 -253 2 -254 -62 7 c-262 30 -555 138 -773 286 -68 46 -88 54 -135 57 -70 5 -113 -20 -140 -80 -19 -40 -20 -77 -20 -977 0 -772 -3 -951 -15 -1025 -63 -388 -284 -729 -610 -940 -107 -70 -181 -107 -301 -148 -167 -58 -256 -72 -454 -71 -153 0 -189 4 -287 27 -548 128 -940 530 -1059 1087 -26 118 -26 391 -1 510 24 113 78 272 121 357 129 256 351 482 603 611 143 74 364 142 458 142 l25 0 -2 -251 -3 -251 -71 -18 c-309 -79 -551 -331 -630 -656 -25 -102 -22 -295 5 -399 72 -270 261 -488 515 -594 117 -49 196 -64 331 -64 130 0 211 15 324 60 221 88 406 275 492 497 61 157 59 95 59 1852 l0 1604 255 0 c140 0 255 -2 255 -5z" />
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-bold uppercase text-white">Servicios</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Hamburguesas
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Picadas
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Perros
                  </Link>
                </li>   
              </ul>
            </div>

            <div>
              <p className="font-medium text-white ">Acerca de Keej Burguer</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Nosotros
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Nuestra Carta
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Restaurantes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link
                  href="#"
                  className="text-gray-100 transition hover:opacity-75"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-100 transition hover:opacity-75"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-100 transition hover:opacity-75"
                >
                  Cookies
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-100 sm:mt-0">
              &copy; 2023. Keej Burguer. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMenu;
