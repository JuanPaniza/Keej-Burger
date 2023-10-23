function WaitOrder() {
  return (
    <>
      <div className="pt-52 w-full h-screen flex justify-center items-center gap-5">
        <div className="flex-col ">
          <h2 className="mx-3">
            Espere su Pedido en breve uno de nuestros empleados se lo hara
            llegar a la mesa{" "}
          </h2>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="  mt-6 flex justify-center w-full text-white bg-gradient-to-r from-orange-500  via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Volver al menu
          </button>
        </div>
      </div>
    </>
  );
}
export default WaitOrder;
