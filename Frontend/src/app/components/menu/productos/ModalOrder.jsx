import { useState } from "react";
import Image from "next/image";

function ModalOrder({ setShowModalOrder, setClickSaucer}) {
  const [closing, setClosing] = useState(false);
  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setShowModalOrder(false);
    }, 300);
  };

  return (
    <>
      <div
        className={`h-auto flex pt-20 z-50   fixed items-center justify-center   overflow-y-auto backdrop-filter backdrop-blur-md inset-0 ${
          closing ? "fadeOut" : "fadeIn"
        }`}
      >
        <div
          className={` h-auto  w-9/12  bg-white rounded-lg  lg:shadow-2xl p-8 transform scale-100 ${
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

          <div className="p-6 text-center">
            <div className="w-full flex justify-center">
              <Image
                src="/carrito-lleno.png"
                alt=" carrito lleno "
                width={80}
                height={80}
                priority
              />
            </div>

            <h3 className="my-10 text-lg text-center font-normal text-gray-800 dark:text-gray-400">
              Desea realizar el pedido?
            </h3>
            <button
              onClick={() => {
                setClickSaucer("make-order"), handleCloseModal();
              }}
              data-modal-hide="popup-modal"
              type="button"
              className="text-white text-center my-5 w-full  bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center justify-center px-5 py-2.5  mr-2"
            >
              Si, Realizar pedido
            </button>
            <button
              onClick={() => handleCloseModal}
              data-modal-hide="popup-modal"
              type="button"
              className="text-white my-5 w-full bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-orange-500 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-gray-600"
            >
              No, Continuar pidiendo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalOrder;
