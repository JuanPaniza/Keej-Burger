function HeaderCart({ hanldeBtnCart }) {
  return (
    <div className=" absolute w-full flex justify-center bg-white">
      <div className="flex w-full  justify-center items-center pt-3 gap-3  my-4 ">
        <svg
          className="h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#ea580c"
            stroke="none"
          >
            <path d="M2370 5099 c-362 -76 -649 -350 -741 -709 -18 -72 -23 -121 -26 -317 l-5 -233 -254 0 c-192 0 -263 -3 -287 -14 -42 -17 -85 -68 -92 -109 -13 -76 -275 -3009 -275 -3082 0 -101 21 -189 67 -285 75 -157 259 -297 438 -335 105 -22 2625 -22 2730 0 179 38 363 178 438 335 46 96 67 184 67 284 0 80 -266 3055 -276 3091 -11 36 -56 87 -90 101 -26 11 -93 14 -289 14 l-255 0 0 199 c0 225 -13 323 -60 454 -91 251 -316 476 -567 567 -171 61 -350 75 -523 39z m325 -314 c182 -38 352 -170 434 -335 59 -121 71 -189 71 -417 l0 -193 -640 0 -640 0 0 193 c0 228 12 295 72 416 126 256 419 395 703 336z m-1093 -1534 c3 -254 4 -271 24 -297 32 -44 68 -66 116 -71 58 -7 108 15 144 63 l29 37 3 269 3 268 639 0 639 0 3 -269 c3 -254 4 -271 24 -297 32 -44 68 -66 116 -71 58 -7 108 15 144 63 l29 37 3 269 3 268 167 -2 167 -3 127 -1395 c84 -911 127 -1426 125 -1485 -3 -69 -8 -100 -26 -133 -34 -65 -87 -118 -149 -149 l-57 -28 -1315 0 -1315 0 -57 28 c-105 51 -168 146 -176 262 -3 59 241 2851 254 2893 2 9 45 12 168 12 l165 0 3 -269z" />
          </g>
        </svg>
        <h3 className=" text-orange-600 font-medium">Tu Pedido</h3>
      </div>
      <button
        type="button"
        onClick={hanldeBtnCart}
        className=" relative z-50 mr-9 pt-3  text-orange-600 hover:text-orange-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default HeaderCart;
