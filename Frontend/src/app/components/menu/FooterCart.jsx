function FooterCart({
  hanldeBtnCart,
  infoCart,
  showModalOrder,
  setShowModalOrder,
}) {
  let total = 0;
  infoCart.products.forEach((cart) => {
    total += cart.subtotal;
  });

  return (
    <>
      <div className="fixed bottom-0 flex  flex-col justify-center w-full lg:w-1/4  px-3">
        <div
          id="exlive-total"
          className="border-b font-medium text-lg border-gray-400  block"
        >
          Total:
          <span className=" font-bold text-lg"> $ {total}</span>
        </div>
        <button
          onClick={hanldeBtnCart}
          className="text-white mt-5  bg-orange-600  hover:bg-orange-700  focus:outline-none focus:ring-4 focus:ring-orange-300  font-medium rounded-2xl text-sm px-5 py-2.5 text-center  mb-2 w-full dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Volver al Menu
        </button>
        <button
          onClick={() => {
            setShowModalOrder(!showModalOrder);
            hanldeBtnCart();
          }}
          disabled={infoCart.length === 0}
          className={`text-white  bg-orange-600  hover:bg-orange-700  focus:outline-none focus:ring-4 focus:ring-orange-300  font-medium rounded-2xl text-sm px-5 py-2.5 text-center  mb-2  w-full dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ${
            infoCart.length === 0 && " bg-slate-300"
          }`}
        >
          Realizar Pedido
        </button>
      </div>
    </>
  );
}

export default FooterCart;
