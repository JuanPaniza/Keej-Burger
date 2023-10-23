import { Formik, ErrorMessage, Field, Form } from "formik";
import { useState, useEffect } from "react";
import Link from "next/link";

function ForgetPassword() {
  const [alert, setAlert] = useState({});
  const [alertok, setAlertok] = useState({});

  function ocultarAlerta() {
    setAlert({})
  }

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        ocultarAlerta();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);
  return (
    <div className=" w-full px-4 pt-12 pb-3 sm:px-6 sm:py-16 lg:w-1/2 lg:px-6 lg:py-24 ">
      <Formik
       initialValues={{
        email: "",
      }}
      validate={(valores) => {
        let errores = {};
        // validacion email
        if (!valores.email) {
          errores.email = "Es necesario que indiques tu email electrónico.";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email =
            "Este email electrónico no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com";
        }
        
        return errores; // Devolver el objeto de errores
      }}
      onSubmit={async (valores) => {
       const {email} = valores
        try {
          const response = await fetch("http://localhost:8080/api/users/forget-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email}),
            }
          );
          const data = await response.json();
          if (response.ok) {
            setAlertok({ msg: data.msg})
            valores.email="";
          } else {
            setAlert({ msg: data.msg})
          }
        } catch (error) {
        }
      }}
      
      >
        {({ errors, touched }) => (
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
              {alertok.msg && <p className="text-GreenKeej-100 text-center mb-2 font-bold">{alertok.msg}</p>}
              <label htmlFor="correo" className="sr-only">
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
              ) : alert.msg ? (
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
                  <p>
                    {alert.msg} 
                  </p>
                </div>
              ) : (
                ""
              )}
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
