import { Formik, ErrorMessage, Field, Form } from "formik";
import Link from "next/link";
import { useState } from "react";

function RecoverPassword() {
   
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
      <Formik
      
      initialValues={{
        password: "",
        passwordConfirm: "",
      }}
      validate={(valores) => {
        let errores = {};
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
        const { password } = valores;
      }}
      >
        {({ errors, touched }) => (
          <Form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Restablecer contraseña
              </h2>

              <p className="mt-4 text-gray-700 text-center mb-5 text-sm mx-4">
                Introduce una{" "}
                <span className=" font-bold text-black">
                  nueva contraseña
                </span>{" "}
                que puedas recordar y que sea segura.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-2 font-bold">
                Nueva contraseña
              </p>
             
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
              href="/es/login"
              data-id="NuevaContraseña"
              className="block w-full rounded-lg bg-GreenKeej px-5 py-3 text-lg font-medium text-white"
            >
              Enviar
            </button>
           
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RecoverPassword;
