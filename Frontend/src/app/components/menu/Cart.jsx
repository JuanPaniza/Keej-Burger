import FooterCart from "./FooterCart";
import HeaderCart from "./HeaderCart";
import Image from "next/image";

function Cart({
  showCart,
  hanldeBtnCart,
  infoCart,
  setInfoCart,
  showModalOrder, 
  setShowModalOrder
  
}) {
  function handleDeleteCart(name) {
    const products = infoCart.products.filter(
      (cart) => cart.name !== name
    );
    setInfoCart({products});
  }
  
  
  return (
    <div
      className={`h-auto lg:flex z-50 lg:pt-0 pt-20  overflow-x-hidden fixed items-center justify-center   overflow-y-auto backdrop-filter backdrop-blur-md inset-0 ${
        !showCart ? "fadeOut" : "fadeIn"
      }`}
    >
      <div
        className={` top-0 z-40 ; overflow-y-scroll h-screen absolute bg-white shadow-2xl  lg:w-3/12 w-full ${
          showCart ? "right-0" : "-right-full lg:-right-1/2"
        }`}
        style={{ transition: "right 0.3s ease-in-out" }}
      >
        <HeaderCart hanldeBtnCart={hanldeBtnCart} />

        <div className="  lg:h-[800px] h-[493px] overflow-y-scroll scrollbar  grid justify-center w-full mt-12">
          {infoCart.products.length === 0 ?
           ( <div className="z-50 flex justify-center items-center h-full w-full text-center text-lg text-gray-900 font-semibold">
              Añade productos al cart
            </div>
          ) : (<div>{infoCart.products.map((cart) => (
            <div key={cart.name} className=" flex flex-col">
              <div className="mt-8  grid grid-flow-col items-center">
                <Image
                  className="  px-8 flex items-center"
                  src={cart.image}
                  alt=" imagen platillo "
                  width={140}
                  height={100}
                  priority
                />

                <div className=" w-full">
                  <p className="font-bold mt-20 lg:mt-0 text-2xl text-orange-700 mb-4 ">
                    {cart.name}
                  </p>
                  <div className="flex justify-center w-full ">
                    <p className="text-gray-600 mb-4 text-right">
                      <span className=" font-bold text-black">Precio: </span>
                      <span className="text-gray-700 font-xs ">
                        ${cart.price} x {cart.amount}
                      </span>
                      <br />
                      <span className="text-left">
                        {" "}
                        <span className=" font-bold text-black ">
                          Subtotal:{" "}
                        </span>{" "}
                        ${cart.subtotal}
                        {"  "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDeleteCart(cart.name)}
                className="  bg-red-700 w-1/2 text-white font-bold shadow appearance-none border rounded-lg  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              >
                Eliminar
              </button>
            </div>
          ))} </div>)}
          
        </div>

        <FooterCart showModalOrder={showModalOrder} setShowModalOrder={setShowModalOrder}  hanldeBtnCart={hanldeBtnCart} infoCart={infoCart} />
      </div>
    </div>
  );
}

export default Cart;
