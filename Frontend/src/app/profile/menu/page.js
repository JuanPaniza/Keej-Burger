"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const menuFuntion = () => {
  const router = useRouter();
  const [menus, setMenus] = useState([]);
  const [showMenus, setShowMenus] = useState(false);
  useEffect(() => {
    const fetchMenus = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        `http://localhost:8080/api/menu/getMenusProfile`,
        config
      );
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

  const deleteSaucer = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/menu/deleteMenu/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {}
  };
  const btnUpdateSaucer = (menu) => {
    const saucers = JSON.stringify(menu);
    router.push(`/profile/producto?plato=${saucers}`);
  };
  return (
    <div>
     <div className="grid justify-center w-full mt-20">
        <h2 className="font-bold text-3xl text-yellow-700 mb-4 text-center">
          Menus
        </h2>
        {menus.map((menu, index) => (
          <div
            key={menu._id}
            className={`menu-item ${showMenus ? "show" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-center lg:w-2/3 lg:ml-64  px-3 mb-4">
              <div className="p-5 shadow-md rounded-3xl bg-white">
                <div className="lg:flex">
                  <div className="lg:w-5/12 xl:w-3/12">
                    <Image
                      className="rounded-md"
                      src={menu.image}
                      alt=" imagen platillo "
                      width={320}
                      height={320}
                      priority
                    />
                  </div>
                  <div className="lg:w-7/12 xl:w-9/12 pl-5">
                    <p className="font-bold mt-6 lg:mt-0 text-2xl text-yellow-600 mb-4">
                      {menu.name}{" "}
                    </p>
                    <p className="text-gray-600 mb-4">
                      Categoría: {""}
                      <span className="text-gray-700 font-bold">
                        {menu.category.toUpperCase()}
                      </span>
                    </p>
                    <p className="text-gray-600 mb-4">{menu.description} </p>

                    <div className=" grid lg:flex lg:justify-between lg:items-end ">
                      <p className="text-gray-600 mb-4">
                        Precio: {""}
                        <span className="text-gray-700 font-bold mb-6">
                          $ {menu.price}
                        </span>
                      </p>
                      <div className=" flex justify-between lg:gap-2 lg:mb-2">
                        <button
                          onClick={() => btnUpdateSaucer(menu)}
                          className="bg-GreenKeej font-bold text-white  shadow border rounded-lg w-auto py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deleteSaucer(menu._id)}
                          className="  bg-red-700 text-white font-bold shadow appearance-none border rounded-lg w-auto py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default menuFuntion;
