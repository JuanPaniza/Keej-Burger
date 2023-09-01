import Image from "next/image";
import { useState } from "react";
import Adicionales from "./Adicionales";
export default function ModalMenu({
  name,
  image,
  description,
  price,
  toggleModal,
  category
}) {
  const [closing, setClosing] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [adicional, setAdicional] = useState([]);


  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const sumaAdicional = adicional.reduce((total, numero) => total + numero, 0)
  const total =  ( price  + sumaAdicional ) * cantidad ;
 


  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      toggleModal();
      setClosing(false);
    }, 300); // Ajusta el tiempo de espera para que coincida con la duración de la animación (300 ms en este caso)
  };

  return (
<>
    <div className= {`h-auto lg:flex z-50 lg:pt-0 pt-20  overflow-x-hidden fixed items-center justify-center   overflow-y-auto backdrop-filter backdrop-blur-md inset-0 ${
      closing ? "fadeOut" : "fadeIn"
    }`}>
        <div
          className={` h-auto  bg-white rounded-lg  lg:shadow-2xl p-8 transform scale-100 ${
            closing ? "scaleDown" : "scaleUp"
          }`}
          style={{ animation: "scaleUp 0.3s ease-out forwards" }}
         
        >
          <button
            onClick={handleCloseModal}
            type="button"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
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
          <div className=" lg:flex lg:items-center">
            <Image
              className=" my-4 mr-10 "
              src={image}
              alt=" imagen platillo "
              width={320}
              height={320}
              priority
            />

            <div>
              <h2 className="text-2xl font-bold mb-4 uppercase">{name}</h2>
              <p className=" font-bold text-lg border-b border-gray-400 mb-5">
                $ {price}
              </p>
              <p className="text-gray-600">{description}</p>
              

              {["hamburguesas", "picadas", "perros"].includes(category) && (<Adicionales category={category} setAdicional={setAdicional} adicional={adicional} />)}
              <div id="exlive-total" className="border-b font-medium text-lg border-gray-400  block">Total: 
               <span className=" font-bold text-lg"> $ {total}</span>
              </div>

              <div className="flex items-center justify-between mt-9">
                  <button 
                  onClick={restarCantidad}
                  type="button" 
                  className="text-white bg-orange-600  hover:bg-orange-700  focus:outline-none focus:ring-4 focus:ring-orange-300  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">-</button> 
                     <div>{cantidad}</div>
                  <button 
                   onClick={sumarCantidad}
                  type="button" 
                  className="text-white bg-orange-600  hover:bg-orange-700  focus:outline-none focus:ring-4 focus:ring-orange-300  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">+</button>
              </div>
             <div className=" flex justify-center mt-4">
             <button type="button" className="text-white  bg-orange-600  hover:bg-orange-700  focus:outline-none focus:ring-4 focus:ring-orange-300  font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Añadir Producto</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
