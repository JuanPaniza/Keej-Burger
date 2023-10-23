import Link from "next/link";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { useState } from "react";

function FormSingUp({}) {
  const [existeUsuario, setExisteUsuario] = useState({});
  const [cambioInputEmail, setCambioInputEmail] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleonClickView(e){
    const dataValue = e.target.dataset.value;
    if (dataValue === 'passwordSingUp') {
      setShowPassword(prevState => !prevState);
    }
    if (dataValue === 'passwordSingUpConfirm') {
      setShowConfirmPassword(prevState => !prevState);
    }
  }
  return (
    <div className=" w-full px-4 pt-12 pb-3 sm:px-6 sm:py-16 lg:w-1/2 lg:px-6 lg:py-24 ">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Registrate para tener el control total!
        </h2>

        <p className="mt-4 text-gray-500">
          Gestiona menús, disponibilidad, órdenes y promociones en tu negocio de
          hamburguesas.
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validate={(valores) => {
          let errores = {};

          //validacion name
          if (!valores.name) {
            errores.name = "Es necesario que indiques tu name.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El name solo puede contener letras y espacios.";
          }
          // validacion email

          if (existeUsuario.error && valores.email !== "") {
            setCambioInputEmail(true);
          } else {
            setCambioInputEmail(false);
          }
          if (!valores.email) {
            errores.email = "Es necesario que indiques tu email electrónico.";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "Este correo electrónico no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com";
          }

          if (!valores.password) {
            errores.password = "Es necesario que indiques una password.";
          } else if (
            !/^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?])(?=.*[A-Z]).+$/.test(
              valores.password
            )
          ) {
            errores.password =
              "Esta password debe tener al menos una letra mayúscula y un carácter especial: ?%$#@";
          }
          // validacion confirmar password
          if (!valores.passwordConfirm) {
            errores.passwordConfirm = "Es necesario que indiques una password.";
          } else if (valores.password !== valores.passwordConfirm) {
            errores.passwordConfirm = "Las password deben coincidir";
          }
          return errores; // Devolver el objeto de errores
        }}
        onSubmit={async (valores) => {
          const { name, email, password } = valores;

          try {
            const response = await fetch("http://localhost:8080/api/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
              setExisteUsuario({ msg: data.msg, error: false });
              valores.name = "";
              valores.email = "";
              valores.password = "";
              valores.passwordConfirm = "";
            } else {
              console.log("existe");
              setExisteUsuario({ msg: data.msg, error: true });
              
            }
           
          } catch (error) {}
        }}
      >
        {({ errors, touched }) => (
          <Form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
            {existeUsuario.error === false ? (
              <div className="text-center text-lg font-medium text-GreenKeej">
                {existeUsuario.msg}
              </div>
            ) : (
              <p className="text-center text-lg font-medium text-gray-600">
                Crea tu cuenta
              </p>
            )}

            <div>
              <label htmlFor="nameid" className="sr-only">
                Nombre
              </label>

              <div className="relative">
                <Field
                  name="name"
                  id="nameid"
                  type="text"
                  className={`w-full border rounded-lg p-4 pe-12 text-lg  ${
                    errors.name && touched.name
                      ? "border-red-400"
                      : "shadow-md  focus:border-gray-400 "
                  }`}
                  placeholder="Nombre"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 ml-2"
                    viewBox="0 0 900.000000 848.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,848.000000) scale(0.100000,-0.100000)"
                      fill="#6b7280"
                      stroke="none"
                    >
                      <path d="M4088 6829 c-476 -39 -898 -368 -1058 -824 -45 -128 -60 -212 -67 -355 -22 -488 245 -943 682 -1163 179 -90 343 -127 559 -127 166 1 255 15 398 64 523 178 863 682 835 1235 -7 136 -24 222 -68 346 -63 180 -161 334 -296 467 -272 267 -607 388 -985 357z m333 -373 c310 -79 559 -324 640 -631 12 -45 23 -128 26 -190 11 -226 -60 -438 -207 -614 -185 -220 -479 -340 -764 -310 -118 12 -194 33 -295 80 -235 110 -419 330 -483 579 -31 121 -31 340 0 455 96 348 380 597 748 655 88 13 227 4 335 -24z" />
                      <path d="M3960 4049 c-382 -38 -756 -171 -1080 -384 -156 -102 -234 -166 -378 -308 -272 -268 -470 -585 -590 -942 -86 -258 -122 -481 -122 -762 l0 -183 1525 0 c1657 0 1563 -3 1623 53 80 74 66 212 -28 270 l-35 22 -1365 5 -1365 5 3 50 c2 28 12 95 23 150 85 428 269 776 574 1081 317 318 716 517 1170 586 118 17 453 17 570 -1 824 -124 1486 -705 1704 -1497 32 -117 58 -251 63 -324 l3 -45 -237 -5 c-220 -5 -239 -6 -265 -26 -38 -28 -71 -79 -79 -121 -14 -77 46 -171 123 -192 24 -7 187 -11 426 -11 l387 0 0 179 c0 487 -136 941 -402 1337 -376 563 -976 944 -1653 1049 -121 19 -464 27 -595 14z" />
                    </g>
                  </svg>
                </span>
              </div>
              <ErrorMessage
                name="name"
                component={() => (
                  <div className=" text-red-500 flex gap-1 text-left text-xs pt-2">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      aria-label="Error:"
                      fill="red"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-5v7h1.5V3h-1.5zm0 8.526v1.5h1.5v-1.5h-1.5z"></path>
                    </svg>
                    {errors.name}
                  </div>
                )}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>

              <div className="relative">
                <Field
                  name="email"
                  id="email"
                  type="email"
                  className={`w-full border rounded-lg p-4 pe-12 text-lg  ${
                    errors.email && touched.email
                      ? "border-red-400"
                      : "shadow-md  focus:border-gray-400 "
                  }`}
                  placeholder="Correo electrónico"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
              {errors.email ? (
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className=" text-red-500 flex gap-1 text-left text-xs pt-2">
                      <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        aria-label="Error:"
                        fill="red"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                      >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-5v7h1.5V3h-1.5zm0 8.526v1.5h1.5v-1.5h-1.5z"></path>
                      </svg>
                      {errors.email}
                    </div>
                  )}
                />
              ) : existeUsuario.error && cambioInputEmail === false ? (
                <div className=" text-red-500 flex gap-1 text-left text-xs pt-2">
                  {" "}
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    aria-label="Error:"
                    fill="red"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-5v7h1.5V3h-1.5zm0 8.526v1.5h1.5v-1.5h-1.5z"></path>
                  </svg>{" "}
                  <p>{existeUsuario.msg}{" "}
                    {
                      <Link href="/es/login" className="underline">
                        Inicia sesión{" "}
                      </Link>
                    }</p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                password
              </label>

              <div className="relative">
                <Field
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onPaste={(event) => event.preventDefault()}
                  placeholder="Crea una contraseña"
                  className={`w-full border rounded-lg p-4 pe-12 text-lg  ${
                    errors.password && touched.password
                      ? "border-red-400"
                      : "shadow-md  focus:border-gray-400 "
                  }`}
                />
                <Link
                  href="#"
                  data-value="passwordSingUp"
                  onClick={handleonClickView}
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-8 cursor-pointer pl-1 pointer-events-none hover:scale-110 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={handleonClickView}
                      data-value="passwordSingUp"
                      className="h-7 w-7  cursor-pointer pointer-events-none  hover:scale-110 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="512.000000pt"
                      height="512.000000pt"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#6b7280"
                        stroke="none"
                      >
                        <path d="M4215 4415 c-31 -11 -382 -357 -1771 -1747 -1520 -1521 -1734 -1738 -1743 -1773 -30 -118 76 -225 194 -194 34 9 90 60 360 329 l320 317 75 -33 c192 -86 482 -162 704 -183 628 -61 1304 173 1811 628 285 256 475 576 475 801 0 300 -307 715 -754 1019 l-48 33 285 287 c310 310 317 320 297 405 -8 36 -48 89 -80 106 -32 16 -86 19 -125 5z m-427 -1159 c215 -158 430 -402 499 -568 74 -175 -7 -359 -271 -624 -345 -344 -795 -562 -1268 -613 -256 -28 -524 2 -793 90 -66 22 -123 43 -127 47 -4 4 59 74 141 156 l148 148 55 -31 c251 -142 578 -130 821 29 352 229 470 697 266 1058 l-31 55 188 188 187 188 39 -22 c21 -12 87 -57 146 -101z m-773 -543 c9 -27 19 -79 22 -118 23 -285 -222 -533 -507 -512 -72 5 -170 32 -170 45 0 9 623 632 632 632 3 0 14 -21 23 -47z" />
                        <path d="M2335 3989 c-650 -71 -1334 -463 -1676 -961 -111 -162 -179 -340 -179 -468 0 -178 120 -422 317 -642 103 -115 230 -228 257 -228 25 0 206 177 206 202 0 9 -65 81 -143 159 -215 216 -311 372 -311 509 0 133 96 293 293 491 346 347 797 566 1273 618 178 20 354 11 551 -26 l88 -17 100 100 c119 118 126 127 106 158 -17 26 -158 64 -332 91 -123 20 -429 27 -550 14z" />
                        <path d="M2425 3349 c-312 -58 -561 -287 -639 -589 -19 -74 -32 -234 -22 -274 4 -15 18 -32 32 -38 24 -11 32 -5 165 128 103 102 149 155 171 198 41 80 125 166 201 206 45 24 101 71 205 174 78 77 142 146 142 153 0 7 -9 22 -20 33 -17 17 -32 20 -102 19 -46 -1 -105 -5 -133 -10z" />
                      </g>
                    </svg>
                  )}
                </Link>
              </div>
              <ErrorMessage
                name="password"
                component={() => (
                  <div className=" flex gap-1 text-red-500 text-left text-xs pt-2">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      aria-label="Error:"
                      fill="red"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-5v7h1.5V3h-1.5zm0 8.526v1.5h1.5v-1.5h-1.5z"></path>
                    </svg>
                    {errors.password}
                  </div>
                )}
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="sr-only">
                Confirme su password
              </label>

              <div className="relative">
                <Field
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type={showConfirmPassword ? "text" : "password"}
                  onPaste={(event) => event.preventDefault()}
                  placeholder="Confirma tu contraseña"
                  className={`w-full border rounded-lg p-4 pe-12 text-lg  ${
                    errors.passwordConfirm && touched.passwordConfirm
                      ? "border-red-400"
                      : "shadow-md  focus:border-gray-400 "
                  }`}
                />

                <Link
                  onClick={handleonClickView}
                  data-value="passwordSingUpConfirm"
                  href="#"
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                >
                  {showConfirmPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-8 cursor-pointer pointer-events-none pl-1  hover:scale-110 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      data-value="passwordSingUpConfirm"
                      onClick={handleonClickView}
                      className="h-7 w-7  cursor-pointer pointer-events-none hover:scale-110 "
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="512.000000pt"
                      height="512.000000pt"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#6b7280"
                        stroke="none"
                      >
                        <path d="M4215 4415 c-31 -11 -382 -357 -1771 -1747 -1520 -1521 -1734 -1738 -1743 -1773 -30 -118 76 -225 194 -194 34 9 90 60 360 329 l320 317 75 -33 c192 -86 482 -162 704 -183 628 -61 1304 173 1811 628 285 256 475 576 475 801 0 300 -307 715 -754 1019 l-48 33 285 287 c310 310 317 320 297 405 -8 36 -48 89 -80 106 -32 16 -86 19 -125 5z m-427 -1159 c215 -158 430 -402 499 -568 74 -175 -7 -359 -271 -624 -345 -344 -795 -562 -1268 -613 -256 -28 -524 2 -793 90 -66 22 -123 43 -127 47 -4 4 59 74 141 156 l148 148 55 -31 c251 -142 578 -130 821 29 352 229 470 697 266 1058 l-31 55 188 188 187 188 39 -22 c21 -12 87 -57 146 -101z m-773 -543 c9 -27 19 -79 22 -118 23 -285 -222 -533 -507 -512 -72 5 -170 32 -170 45 0 9 623 632 632 632 3 0 14 -21 23 -47z" />
                        <path d="M2335 3989 c-650 -71 -1334 -463 -1676 -961 -111 -162 -179 -340 -179 -468 0 -178 120 -422 317 -642 103 -115 230 -228 257 -228 25 0 206 177 206 202 0 9 -65 81 -143 159 -215 216 -311 372 -311 509 0 133 96 293 293 491 346 347 797 566 1273 618 178 20 354 11 551 -26 l88 -17 100 100 c119 118 126 127 106 158 -17 26 -158 64 -332 91 -123 20 -429 27 -550 14z" />
                        <path d="M2425 3349 c-312 -58 -561 -287 -639 -589 -19 -74 -32 -234 -22 -274 4 -15 18 -32 32 -38 24 -11 32 -5 165 128 103 102 149 155 171 198 41 80 125 166 201 206 45 24 101 71 205 174 78 77 142 146 142 153 0 7 -9 22 -20 33 -17 17 -32 20 -102 19 -46 -1 -105 -5 -133 -10z" />
                      </g>
                    </svg>
                  )}
                </Link>
              </div>
              <ErrorMessage
                name="passwordConfirm"
                component={() => (
                  <div className=" flex gap-1 text-red-500 text-left text-xs pt-2">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      aria-label="Error:"
                      fill="red"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-5v7h1.5V3h-1.5zm0 8.526v1.5h1.5v-1.5h-1.5z"></path>
                    </svg>
                    {errors.passwordConfirm}
                  </div>
                )}
              />
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-GreenKeej px-5 py-3 text-lgfont-medium text-white"
             
            >
              Registrate
            </button>

            <p className="text-center text-sm text-gray-500">
              ¿Tienes cuenta?
              <Link
                href="/es/login"
                data-id="Registro"
                className=" text-GreenKeej transition-colors"
              >
                {" "}
                Inicia sesión
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormSingUp;
