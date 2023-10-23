import { Formik, Form } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

function Confirm({ token }) {
  const [alert, setAlert] = useState({});
  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/confirm/${token}`
        );
        const data = await response.json();

        if (response.ok) {
          setAlert({ msg: data.msg, error: false });
        } else {
          setAlert({ msg: data.msg, error: true });
        }
      } catch (error) {}
    };
    confirmAccount();
  }, []);

  return (
    <Formik>
      {() => (
        <div className=" w-full px-4 pt-12 pb-3 sm:px-6 sm:py-16 lg:w-1/2 lg:px-6 lg:py-24 ">
          <Form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">
                  Confirmar Cuenta
              </h2>
              
              {alert.error === true ? (
                <div className=" flex gap-1 text-red-500 justify-center items-center text-bold pt-2 mb-4">
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
                  <p className="text-red-700 text-center  font-bold ">
                    {alert.msg}
                  </p>{" "}
                </div>
              ) : alert.error === false ? (
                <div className=" flex  text-GreenKeej justify-center items-center flex-col mt-8 ">
                <Image
                  alt="verificado"
                  src="/verified.png"
                  width={60}
                  height={60}
                  priority
                />
                <div className=" flex gap-1 text-GreenKeej justify-center items-center text-bold pt-8 ">
                  <p className="text-GreenKeej font-bold text-center mb-4">
                    {alert.msg}
                  </p>{" "}
                  <Link
                    href="/es/login"
                    className="text-GreenKeej-100 hover:underline hover:text-GreenKeej font-bold text-center mb-4"
                  >
                    {" "}
                    Inicia sesión
                  </Link>{" "}
                </div>
              </div>
              ) : (
                ""
              )}
            </div>
            <div></div>
          </Form>
        </div>
      )}
      </Formik>
  );
}

export default Confirm;