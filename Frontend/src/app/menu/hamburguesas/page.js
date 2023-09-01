"use client";
import FooterMenu from "@/components/menu/FooterMenu";
import HeaderMenu from "@/components/menu/HeaderMenu"
import { useEffect, useState } from "react";
import Image from "next/image";
import ModalMenu from "@/components/menu/ModalMenu";
import Link from "next/link";

function hamburguesa() {
  const [menus, setMenus] = useState([]);
  const [showMenus, setShowMenus] = useState(false);
  const [openModalId, setOpenModalId] = useState(null);
  useEffect(() => {
    const fetchMenus = async () => {
      const response = await fetch(`http://localhost:8080/api/menu/getMenus`);
      const data = await response.json();
      try {
        if (response.ok) {
           setMenus(data);
           setTimeout(() => {
            setShowMenus(true);
          }, 100);
        } else {
          console.log("error", data);
        }
      } catch (error) {}
    };
    fetchMenus();
  }, []);

  const handleOpenModal = (menuId) => {
    setOpenModalId(menuId);
  };
  const handleCloseModal = () => {
    setOpenModalId(null);
  };
  return (
    <>
    <HeaderMenu />
    <div className=" w-full pt-44 my-20  lg:py-24" >
      <div className="h-full scroll-m-4 grid justify-center w-full mt-10">
        {menus.filter(menu => menu.category === "hamburguesas").map((menu, index) => (
           <div key={menu._id}
           className={`${showMenus ? 'show' : ''}`}
           style={{ transitionDelay: `${index * 0.1}s` }}
           >
            <div className=" flex justify-center lg:w-2/3 lg:ml-64 px-3 mb-4">
              <button
                onClick={() => handleOpenModal(menu._id)}
                type="button"
                className="p-5 shadow-md rounded-3xl bg-white mb-2"
              >
                <div className="flex items-center">
                  <div className="lg:w-5/12 w-4/12 xl:w-3/12">
                  <Image
                      className="rounded-md"
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
                        <span className="text-gray-700 font-bold mb-6">$ {menu.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            {openModalId === menu._id && (
            <ModalMenu
              toggleModal={handleCloseModal}
              name={menu.name}
              image={menu.image}
              description={menu.description}
              price={menu.price}
              category={menu.category}
            />
          )}
          </div>
      
    
        ))}
      </div>
      <button>
            <Image
              className="rounded-md fixed bottom-24 lg:right-12  right-3  lg:hover:scale-110 transition-all shadow-xl "
              src="/carrito.png"
              alt=" imagen carrito "
              width={50}
              height={50}
              priority
            />
        </button>
      </div>
      <FooterMenu/>
   </>
  );
}

export default hamburguesa