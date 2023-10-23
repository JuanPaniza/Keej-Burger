import Image from "next/image";
import { useState } from "react";
import Additionals from "./Additionals";
export default function ModalMenu({
  name,
  image,
  description,
  price,
  toggleModal,
  category,
  hanldeBtnCart,
  handleInfoCart,
}) {
  const [closing, setClosing] = useState(false);
  const [amount, setAmount] = useState(1);
  const [additionalPrice, setAdditionalPrice] = useState([]);
  const [additional, setAdditionals] = useState([]);

  const subtractAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const sumAmount = () => {
    setAmount(amount + 1);
  };
  const sumAdditional = additionalPrice.reduce(
    (total, number) => total + number,
    0
  );
  const subtotal = (price + sumAdditional) * amount;
  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      toggleModal();
      setClosing(false);
    }, 300); // Set the timeout to match the length of the animation (300 ms in this case)
  };
  return (
    <>
      <div
        className={`h-auto lg:flex z-40 lg:pt-0 pt-20  overflow-x-hidden fixed items-center justify-center   overflow-y-auto backdrop-filter backdrop-blur-md inset-0 ${
          closing ? "fadeOut" : "fadeIn"
        }`}
      >
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

              {["hamburguesas", "picadas", "perros"].includes(category) && (
                <Additionals
                  category={category}
                  setAdditionals={setAdditionals}
                  additional={additional}
                  setAdditionalPrice={setAdditionalPrice}
                  additionalPrice={additionalPrice}
                />
              )}
              <div
                id="exlive-total"
                className="border-b font-medium text-lg border-gray-400  block"
              >
                Total:
                <span className=" font-bold text-lg"> $ {subtotal}</span>
              </div>

              <div className="flex items-center justify-between mt-9">
                <button
                  onClick={subtractAmount}
                  type="button"
                  className="text-white bg-orange-600  hover:bg-orange-700  focus:outline-none focus:ring-4 focus:ring-orange-300  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  -
                </button>
                <div>{amount}</div>
                <button
                  onClick={sumAmount}
                  type="button"
                  className="text-white bg-orange-600  hover:bg-orange-700  focus:outline-none focus:ring-4 focus:ring-orange-300  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  +
                </button>
              </div>
              <div className=" flex justify-center mt-4">
                <button
                  type="button"
                  onClick={() => {
                    hanldeBtnCart();
                    handleCloseModal();
                    handleInfoCart(
                      name,
                      image,
                      subtotal,
                      amount,
                      price,
                      additional
                    );
                  }}
                  className="text-white  bg-orange-600  hover:bg-orange-700  focus:outline-none focus:ring-4 focus:ring-orange-300  font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Añadir Producto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
