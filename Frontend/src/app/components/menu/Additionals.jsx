function Additionals({ category, setAdditionalPrice, additionalPrice, setAdditionals, additional }) {
  
  function handelAdditional(e) {
    const checked = e.target.checked;
    const deletePrice = parseFloat(e.target.dataset.price);
    const name = e.target.dataset.name;

    if (checked && !additional.includes(name)) {
      setAdditionals([...additional, name]);
    } else if (!checked) {
      const updateAdditionals = additional.filter(additional => additional!== name);
      setAdditionals(updateAdditionals);
    }
        if (checked) {
          const newAdditional = parseFloat(e.target.dataset.price);
          setAdditionalPrice([...additionalPrice, newAdditional]);
        } else {
          // Checkbox unchecked, remove first matching value from extra state
          const deleteIndex = additionalPrice.indexOf(deletePrice); 
          if (deleteIndex !== -1) {
            const updateAdditional = [...additionalPrice];
            // remove from array
            updateAdditional.splice(deleteIndex, 1);  
            setAdditionalPrice(updateAdditional);
          }
        }
      }
  return (
    <>
    <h3 className="text-lg my-3 font-semibold mb-4 uppercase">
                additionals
              </h3>
      <ul className="list-disc list-inside">
        <li className="flex items-center">
          <input
            onChange={handelAdditional}
            type="checkbox"
            data-price="2000"
            data-name="Queso Cheddar"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Queso Cheddar + $ <span className=" font-bold">2.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
            onChange={handelAdditional}
            type="checkbox"
            data-price="2000"
            data-name="Trocitos de Piña"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Trocitos de Piña + $ <span className=" font-bold">2.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdditional}
            type="checkbox"
            data-price="3000"
            data-name="Tocineta"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Tocineta + $ <span className=" font-bold">3.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdditional}
            type="checkbox"
            data-price="3000"
            data-name=" Queso Mozzarella"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Queso Mozzarella + $ <span className=" font-bold">3.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdditional}
            type="checkbox"
            data-price="3500"
            data-name="Paliplatanito"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Paliplatanito + $ <span className=" font-bold">3.500</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdditional}
            type="checkbox"
            data-price="3500"
            data-name="Papas Fritas"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Papas Fritas + $ <span className=" font-bold">3.500</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdditional}
            type="checkbox"
            data-price="4000"
            data-name="Chorizo"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Chorizo + $ <span className=" font-bold">4.000</span>
          </span>
        </li>
        <li className="flex items-center">
          <input
          onChange={handelAdditional}
            type="checkbox"
            data-price="6000"
            data-name="Cobertura de Mozzarella"
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
            onChange={handelAdditional}
              type="checkbox"
              data-price="6000"
              data-name="Carne de Hamburguesa"
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
          comentarios additionals
          <input
            className=" dark:focus:ring-orange-800  w-full border mt-4 border-gray-300 shadow-current rounded-md"
            type="text"
            onBlur={e => setAdditionals([...additional, e.target.value ])}
          />
        </label>
      </div>
    </>
  );
}

export default Additionals;
