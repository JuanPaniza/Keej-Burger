"use client";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import { useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";


const addProducts = () => {
  const router = useRouter();
  const [routeImg, setRouteImg] = useState("");
  const [loading, setLoading] = useState(null);
  
  let saucerParsed = {};

  const searchParams = useSearchParams();
  const saucer = searchParams.get("plato");
  if (saucer) {
    try {
      saucerParsed = JSON.parse(decodeURIComponent(saucer));
    } catch (error) {
      console.error("Error al analizar JSON:", error);
    }
  }
  const handleChangeImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setRouteImg(imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const handleClear = () => {
    setRouteImg("");
    router.push(`/profile/menu`);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const fileInputRef = useRef(null);
  return (
    <Formik
      initialValues={{
        name: "" || saucerParsed.name,
        price: "" || saucerParsed.price,
        category: "" || saucerParsed.category,
        description: "" || saucerParsed.description,
        id: saucerParsed._id,
        imageRuta: saucerParsed.image,
      }}
      validate={(valores) => {
        let errores = {};

        return errores;
      }}
      onSubmit={async (valores) => {
        setLoading(true);
        let image = routeImg;
        const { name, price, category, description, id, imageRuta } = valores;
        console.log(valores)
        if (Object.keys(saucerParsed).length === 0) {
          try {
            const token = localStorage.getItem("token");
            if (!token) return;
            const response = await fetch(
              "http://localhost:8080/api/menu/hostImage",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                  name,
                  price,
                  category,
                  image,
                  description,
                }),
              }
            );
            if (response.ok) {
              setLoading(false);
            }
            handleClear();
            valores.name = "";
            valores.price = "";
            valores.category = "";
            valores.description = "";
          } catch (error) {
            console.log("error", error);
          }
        } else {
          try {
            const response = await fetch(
              `http://localhost:8080/api/menu/putImage${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  price,
                  category,
                  imageRuta,
                  description,
                }),
              }
            );
            if (response.ok) {
              setLoading(false);
            }
            handleClear();
            valores.name = "";
            valores.price = "";
            valores.category = "";
            valores.description = "";
            valores.id = "";
            valores.imageRuta = "";
          } catch (error) {
            console.log("error", error);
          }
        }
      }}
    >
      {({handleChange}) => (
        <>
       <div className="flex justify-center items-center w-full h-screen my-10">
            {loading && (
              <div className=" overlay w-screen flex justify-center items-center fixed ">
                <Image
                  className=" text-center lg:ml-52"
                  alt="Logo-BK"
                  src="/kb.gif"
                  width={400}
                  height={500}
                  priority
                />
              </div>
            )}
            <div className="w-full mx-8  max-w-3xl">
         
                <Form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
                  <h2 className=" uppercase text-3xl font-bold  text-amber-700 lg:mt-0 mt-10  mb-4 text-center">
                    Agregar Platillo
                  </h2>
                  <div className="mb-4">
                    <label
                      className="block text-amber-700 text-sm font-bold mb-2"
                      htmlFor="nameId"
                    >
                      Nombre
                    </label>
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="name"
                      id="nameId"
                      type="text"
                      placeholder="Nombre Platillo"
                      onChange={handleChange}
                  
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-amber-700 text-sm font-bold mb-2"
                      htmlFor="priceid"
                    >
                      Precio
                    </label>
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="price"
                      id="priceid"
                      type="number"
                      placeholder="$0"
                      min="0"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-amber-700 text-sm font-bold mb-2"
                      htmlFor="categoryid"
                    >
                      Categoría
                    </label>
                    <Field
                      as="select"
                      className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="categoryid"
                      name="category"
                    >
                      <option value="">-- Seleccione --</option>
                      <option value="hamburguesas">Hamburguesas</option>
                      <option value="perros">Perros</option>
                      <option value="picadas">Picadas</option>
                      <option value="bebida">Bebidas</option>
                    </Field>
                  </div>
                  {/* IMAGEN */}
                  <div className="mb-4 flex justify-normal items-center gap-0 lg:gap-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageId">
                      <Image
                        name="image"
                        className="object-cover w-24 lg:w-20 h-16 rounded-full"
                        width={200}
                        height={200}
                        src={routeImg ? routeImg : saucerParsed.image || "/nube.jpg"}
                        alt="profile photo"
                      />
                    </label>
                    <div className="flex items-center">
                      <input
                        className="block w-full text-sm mx-4 bg-amber-50 rounded-xl text-amber-700 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-amber-700 hover:file:bg-orange-200"
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        id="imageId"
                        name="image"
                        onChange={handleChangeImage}
                      />
                      {routeImg && (
                        <button
                          onClick={handleClear}
                          className="text-base font-extrabold text-amber-600"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-amber-700 text-sm font-bold mb-2"
                      htmlFor="descripcionid"
                    >
                      Descripción
                    </label>
                    <Field
                      as="textarea"
                      className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-amber-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                      id="descripcionid"
                      name="description"
                      placeholder="Descripción del Platillo"
                    ></Field>
                  </div>

                  <button
                    type="submit"
                    className="bg-amber-600 rounded-xl hover:bg-amber-500 transition-all w-full mt-5 p-2 text-white uppercase font-bold"
                  >
                    {Object.keys(saucerParsed).length === 0
                      ? "Agregar Platillo"
                      : "Actualizar platillo"}
                  </button>
                </Form>
           
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default addProducts;
