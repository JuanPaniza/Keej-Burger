import { Formik, Form } from "formik";

import { useState, useEffect } from "react";
import FormRecoverPassword from "./FormRecoverpassword";

function RecoverPassword({ token }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alertok, setAlertok] = useState({});
  const [alert, setAlert] = useState({});
  const [checkToken, setCheckToken] = useState({});

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/users/forget-password/${token}`);
        const data = await response.json();

        if (response.ok) {
          setCheckToken({ msg: data.msg, error: false });
        } else {
          setCheckToken({ msg: data.msg, error: true });
        }
      } catch (error) {}
    };
    confirmAccount();
  }, []);


  function ocultarAlerta() {
    setAlert({});
  }

  useEffect(() => {
    if (alertok) {
      const timeout = setTimeout(() => {
        ocultarAlerta();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);
  function handleonClickView(e) {
    const dataValue = e.target.dataset.value;
    if (dataValue === "passwordSingUp") {
      setShowPassword((prevState) => !prevState);
    }
    if (dataValue === "passwordSingUpConfirm") {
      setShowConfirmPassword((prevState) => !prevState);
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

          try {
            const response = await fetch(
              `http://localhost:8080/api/users/forget-password/${token}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
              }
            );
            const data = await response.json();

            if (response.ok) {
              setAlertok({ msg: data.msg });
              valores.password = "";
              valores.passwordConfirm = "";
            } else {
              setAlert({ msg: data.msg });
            }
          } catch (error) {}
        }}
      >
        {({ errors, touched }) => (
          <Form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
            {checkToken.error ? (
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
                  {checkToken.msg}
                </p>{" "}
              </div>
            ) : checkToken.error === false ? (
              <FormRecoverPassword
                alert={alert}
                alertok={alertok}
                showPassword={showPassword}
                handleonClickView={handleonClickView}
                errors={errors}
                touched={touched}
                showConfirmPassword={showConfirmPassword}
              />
            ) : (
              ""
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RecoverPassword;
