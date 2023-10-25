"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const orders = () => {
  const [orders, setOrders] = useState([]);


  const total = orders.reduce((total, order) => {
    const orderSubtotal = order.products.reduce(
      (subtotal, product) => subtotal + product.subtotal,
      0
    );
    return total + orderSubtotal;
  }, 0);

  const orderOk = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/cart/deleteOrder/${id}`,
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
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        `http://localhost:8080/api/cart/getOrder`,
        config
      );
      const data = await response.json();
      try {
        if (response.ok) {
          setOrders(data);
        }
      } catch (error) {}
    };
    fetchOrders();
  }, []);
  return (
    <>
      <div className="grid justify-center w-full mt-20">
        <h2 className="font-bold text-3xl text-white mb-4 text-center">
          Ordenes
        </h2>
        {orders.map((order) => (
          <div key={order._id}>
            <div className="flex justify-center lg:w-1/2 lg:ml-64  px-3 mb-4">
              <div className="p-5 shadow-md rounded-3xl bg-white">
                <div className="text-gray-700 font-bold mb-6">
                  Order: <span className=" text-yellow-600">{order._id}</span>
                </div>
                <div className="text-gray-700 font-bold mb-6">
                  Cliente:{" "}
                  <span className=" text-yellow-600">
                    {"  "}
                    {order.customer}
                  </span>{" "}
                </div>
                <div className="text-gray-700 font-bold mb-6">
                  Mesa:
                  <span className=" text-yellow-600">
                    {"  "}
                    {order.table}
                  </span>{" "}
                </div>
                <div className=" text-center font-bold mt-6 lg:mt-0 text-2xl text-orange-800 mb-4">
                  Productos
                </div>
                {order.products.map((product) => (
                  <div key={product.name}>
                    <div className="lg:flex">
                      <div className="lg:w-5/12 w-3/6 h-3/6 xl:w-3/12">
                        <Image
                          className="rounded-md "
                          src={product.image}
                          alt=" imagen platillo "
                          width={320}
                          height={320}
                          priority
                        />
                      </div>
                      <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        <p className="font-bold text-yellow-600 mb-6 ">
                          {product.name}
                        </p>
                        <p className=" text-gray-700">Adicionales:</p>
                        <span className="font-semibold text-gray-600">
                          {product.additional.map((addition) => (
                            <div key={addition}>
                              <p className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
                                {addition}
                              </p>
                            </div>
                          ))}
                        </span>

                        <p className=" text-gray-700">
                          Cantidad:
                          <span className=" font-bold text-gray-600">
                            {"  "}
                            {product.amount}
                          </span>
                        </p>
                        <div className=" grid lg:flex lg:justify-between lg:items-end ">
                          <p className="text-gray-600 mb-4 border-b">
                            Subtotal: {""}
                            <span className="text-gray-700 font-bold mb-6">
                              $ {product.subtotal}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className=" grid lg:flex lg:justify-between lg:items-end ">
                  <p className="text-gray-600 mb-4">
                    Total: {""}
                    <span className="text-gray-700 font-bold mb-6">
                      $ {total}
                    </span>
                  </p>
                </div>
                <div className="lg:flex lg:justify-between gap-10">
                  <button
                    onClick={() => orderOk(order._id)}
                    className="bg-red-600 flex justify-center w-full font-bold text-white  shadow border rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    Eliminar Order
                  </button>
                  <button
                    onClick={() => orderOk(order._id)}
                    className="bg-GreenKeej flex justify-center w-full font-bold text-white  shadow border rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    Order Lista
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default orders;
