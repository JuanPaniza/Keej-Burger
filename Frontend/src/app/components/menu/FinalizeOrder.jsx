function FinalizeOrder({ fetchSendOrder, infoCart, setInfoCart }) {
  const handleChangeName = (event) => {
    const customer = event.target.value;
    setInfoCart({ ...infoCart, customer });
  };
  const handleChangeTable = (event) => {
    const table = event.target.value;
    setInfoCart({ ...infoCart, table });
  };
  return (
    <div className="mx-auto max-w-screen-xl  px-4 py-16 sm:px-6 lg:px-8 lg:mt-24  mt-60 ">
      <div className="mx-auto max-w-lg bg-white rounded-lg">
        <p className="mx-auto pt-10 px-5 max-w-md text-center text-GreenKeej ">
          Para finalizar con exito su pedido porfavor ingrese los siguientes
          datos
        </p>

        <form
          onSubmit={fetchSendOrder}
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="nombre" className="sr-only">
              Nombre
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-700 p-4 pe-12 text-sm shadow-lg"
                placeholder="Escribe tu Nombre "
                id="nombre"
                name="nombre"
                onBlur={handleChangeName}
              />
            </div>
          </div>

          <div>
            <label htmlFor="table" className="sr-only">
              table
            </label>
            <div className="relative">
              <input
                type="text"
                id="table"
                className="w-full rounded-lg border-gray-700  p-4 pe-12 text-sm shadow-lg"
                placeholder="Escribe el Numero de table"
                name="numerotable"
                onBlur={handleChangeTable}
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-GreenKeej px-5 py-3 text-sm font-medium text-white"
          >
            Realizar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default FinalizeOrder;
