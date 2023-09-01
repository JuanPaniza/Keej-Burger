function Adicionales({ category, setAdicional, adicional }) {

    function handelAdicional(e) {
        const checked = e.target.checked;
        const priceToRemove = parseFloat(e.target.dataset.price);
      
        if (checked) {
          // Checkbox marcado, agregar el valor al estado adicional
          const newAdicional = parseFloat(e.target.dataset.price);
          setAdicional([...adicional, newAdicional]);
        } else {
          // Checkbox desmarcado, eliminar el primer valor coincidente del estado adicional
          const indexToRemove = adicional.indexOf(priceToRemove);
          if (indexToRemove !== -1) {
            const updatedAdicional = [...adicional];
            updatedAdicional.splice(indexToRemove, 1);
            setAdicional(updatedAdicional);
          }
        }
      }
      

  return (
    <>
    <h3 className="text-lg my-3 font-semibold mb-4 uppercase">
                adicionales
              </h3>
      <ul className="list-disc list-inside">
        <li className="flex items-center">
          <input
            onChange={handelAdicional}
            type="checkbox"
            data-price="2000"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Queso Cheddar + $ <span className=" font-bold">2.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
            onChange={handelAdicional}
            type="checkbox"
            data-price="2000"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Trocitos de Piña + $ <span className=" font-bold">2.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdicional}
            type="checkbox"
            data-price="3000"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Tocineta + $ <span className=" font-bold">3.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdicional}
            type="checkbox"
            data-price="3000"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Queso Mozzarella + $ <span className=" font-bold">3.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdicional}
            type="checkbox"
            data-price="3500"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Paliplatanito + $ <span className=" font-bold">3.500</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdicional}
            type="checkbox"
            data-price="3500"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Papas Fritas + $ <span className=" font-bold">3.500</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdicional}
            type="checkbox"
            data-price="4000"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Chorizo + $ <span className=" font-bold">4.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdicional}
            type="checkbox"
            data-price="6000"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Cobertura de Mozzarella + ${" "}
            <span className=" font-bold">6.000</span>
          </span>
        </li>
        {category === "hamburguesas" && (
          <li className="flex items-center">
            <input
            onChange={handelAdicional}
              type="checkbox"
              data-price="6000"
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">
              Carne de Hamburguesa + $ <span className=" font-bold">6.000</span>
            </span>
          </li>
        )}
      </ul>
      <div className="my-8">
        <label className="  text-lg font-semibold uppercase">
          comentarios adicionales
          <input
            className=" dark:focus:ring-orange-800  w-full border mt-4 border-gray-300 shadow-current rounded-md"
            type="text"
          />
        </label>
      </div>
    </>
  );
}

export default Adicionales;
