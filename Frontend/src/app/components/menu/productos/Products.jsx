import Image from "next/image";
import ModalMenu from "../ModalMenu";
import Cart from "../Cart";
import BtnCart from "../BtnCart";
import { useEffect, useState } from "react";

function Products({
  showModalOrder,
  setShowModalOrder,
  infoCart,
  setInfoCart,
  handleInfoCart,
  clickSaucer,
  showCart,
  openModalId,
  handleOpenModal,
  handleCloseModal,
  hanldeBtnCart,
}) {
  const [menus, setMenus] = useState([]);
  const [showMenus, setShowMenus] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      const response = await fetch(`http://localhost:8080/api/menu/getMenus`);
      const data = await response.json();
      console.log(data)
      try {
        if (response.ok) {
          setMenus(data);
          setTimeout(() => {
            setShowMenus(true);
          }, 100);
        }
      } catch (error) {}
    };
    fetchMenus();
  }, []);
  return (
    <div className=" pt-72 lg:pt-52 lg:pb-5 min-h-screen">
      {
        <Cart
          showCart={showCart}
          hanldeBtnCart={hanldeBtnCart}
          infoCart={infoCart}
          setInfoCart={setInfoCart}
          showModalOrder={showModalOrder}
          setShowModalOrder={setShowModalOrder}
        />
      }
      {menus
        .filter((menu) => menu.category === clickSaucer)
        .map((menu, index) => (
          <div
            key={menu._id}
            className={`${showMenus ? "show" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className=" relative w-full ">
              <div className="h-full scroll-m-4 grid justify-center w-full ">
                <div className=" flex justify-center w-screen  px-3 ">
                  <button
                    onClick={() => handleOpenModal(menu._id)}
                    type="button"
                    className="p-5 shadow-md rounded-3xl bg-white mb-2"
                  >
                    <div className="flex items-center">
                      <div className="lg:w-5/12 h-auto w-4/12 xl:w-3/12">
                        <Image
                          className="rounded-md hover:scale-125 transition-all"
                          src={menu.image}
                          alt=" imagen platillo "
                          width={320}
                          height={320}
                          priority
                        />
                      </div>
                      <div className="lg:w-7/12 xl:w-9/12 pl-5 text-center">
                        <p className="font-bold mt-6 lg:mt-0 text-2xl text-yellow-600 mb-4">
                          {menu.name}
                        </p>
                        <div className="flex justify-center">
                          <p className="text-gray-600 mb-4 text-right">
                            Precio:{" "}
                            <span className="text-gray-700 font-bold mb-6">
                              $ {menu.price}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                {openModalId === menu._id && (
                  <ModalMenu
                    handleInfoCart={handleInfoCart}
                    hanldeBtnCart={hanldeBtnCart}
                    toggleModal={handleCloseModal}
                    name={menu.name}
                    image={menu.image}
                    description={menu.description}
                    price={menu.price}
                    category={menu.category}
                  />
                )}
              </div>
            </div>
            {!showCart && <BtnCart hanldeBtnCart={hanldeBtnCart} />}
          </div>
        ))}
    </div>
  );
}
export default Products;
