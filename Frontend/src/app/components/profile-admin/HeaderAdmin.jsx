"use client";
import Image from "next/image";
import { useState } from "react";
import NavHeader from "./NavHeader";

function HeaderAdmin() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
      setMenu(!menu);
  }

  return (
    <>
      <div className="lg:w-1/4 lg:h-screen">
        <div className="bg-cremKB lg:block   lg:rounded-none lg:h-screen shadow-2xl lg:fixed lg:w-1/4">
          <div className="flex flex-col items-center gap-20 lg:gap-5 lg:h-screen  justify-around ">
            
            <div className= "flex items-center w-full justify-around " >
              <Image
                className="my-4 h-12 w-20 lg:h-20  lg:w-32 "
                alt="Logo-BK1"
                src="/LOGOKB1.png"
                width={50}
                height={50}
                priority
              />
              <button
                className={`ml-3 mr-2 lg:hidden transition-all duration-300 ${
                  menu ? "transform rotate-90" : "transform rotate-0"
                }`}
                onClick={toggleMenu}
              >
                {!menu ? (
                  <svg
                    className=" ml-3 mr-2 lg:hidden "
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width={25}
                    height={25}
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#7c392f"
                      stroke="none"
                    >
                      <path d="M245 4471 c-90 -22 -173 -90 -215 -176 -34 -69 -35 -198 -2 -265 34 -71 75 -113 144 -151 l63 -34 2325 0 2325 0 51 27 c76 40 107 70 145 140 31 58 34 70 34 148 0 78 -3 90 -34 148 -37 69 -79 109 -151 144 l-45 23 -2305 2 c-1268 0 -2318 -2 -2335 -6z" />
                      <path d="M245 2871 c-90 -22 -173 -90 -215 -176 -34 -69 -35 -198 -2 -265 34 -71 75 -113 144 -151 l63 -34 2325 0 2325 0 51 27 c76 40 107 70 145 140 31 58 34 70 34 148 0 78 -3 90 -34 148 -37 69 -79 109 -151 144 l-45 23 -2305 2 c-1268 0 -2318 -2 -2335 -6z" />
                      <path d="M245 1271 c-90 -22 -173 -90 -215 -176 -34 -69 -35 -198 -2 -265 34 -71 75 -113 144 -151 l63 -34 2325 0 2325 0 51 27 c76 40 107 70 145 140 31 58 34 70 34 148 0 78 -3 90 -34 148 -37 69 -79 109 -151 144 l-45 23 -2305 2 c-1268 0 -2318 -2 -2335 -6z" />
                    </g>
                  </svg>
                ) : (
                  <svg
                    className=" ml-3 mr-2 lg:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width={25}
                    height={25}
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#7c392f"
                      stroke="none"
                    >
                      <path d="M205 5103 c-171 -61 -248 -244 -175 -410 17 -39 212 -239 1063 -1090 l1042 -1043 -1046 -1047 c-1163 -1165 -1084 -1076 -1084 -1218 1 -86 25 -145 85 -205 60 -60 119 -84 205 -85 142 0 53 -79 1218 1084 l1047 1046 1048 -1046 c1164 -1163 1075 -1084 1217 -1084 86 1 145 25 205 85 60 60 84 119 85 205 0 142 79 53 -1084 1217 l-1046 1048 1046 1048 c1163 1164 1084 1075 1084 1217 -1 86 -25 145 -85 205 -60 60 -119 84 -205 85 -142 0 -53 79 -1218 -1084 l-1047 -1046 -1043 1042 c-870 871 -1050 1046 -1091 1064 -68 30 -158 34 -221 12z" />
                    </g>
                  </svg>
                )}
              </button>
            </div>
            
             <NavHeader menu={menu} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderAdmin;
