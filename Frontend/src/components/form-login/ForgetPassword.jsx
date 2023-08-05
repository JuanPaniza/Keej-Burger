import { Formik, ErrorMessage, Field, Form } from "formik";
import Link from "next/link";

function ForgetPassword() {

  return (
    <div className=" w-full px-4 pt-12 pb-3 sm:px-6 sm:py-16 lg:w-1/2 lg:px-6 lg:py-24 ">
      <Formik>
        {() => (
          <Form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Restablecer contraseña
              </h2>

              <p className="mt-4 text-gray-700 text-center mb-5 text-sm mx-4">
                Introduce la{" "}
                <span className=" font-bold text-black">dirección de correo</span> que
                usaste en el registro. Te enviaremos un correo con tu nombre de
                usuario y un enlace para que puedas restablecer tu contraseña.  
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-2 font-bold">Dirección de correo electrónico</p>
              <label htmlFor="correo" className="sr-only">
                Correo electrónico
              </label>

              <div className="relative">
                <Field
                  name="correo"
                  id="correo"
                  type="email"
                  className="w-full border rounded-lg p-4 pe-12 text-lg shadow-md  focus:border-gray-400 "
                  placeholder="Correo electrónico"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
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
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-GreenKeej px-5 py-3 text-lg font-medium text-white"
            >
              Enviar
            </button>
            <p className="text-center text-sm text-gray-500">
              ¿Tienes cuenta?
              <Link
                href="/es/login"
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

export default ForgetPassword;
