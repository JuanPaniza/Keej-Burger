"use client";
import FooterMenu from "../components/menu/FooterMenu"
import HeaderMenu from "../components/menu/HeaderMenu";
import { useState } from "react";
import MainMenu from "../components/menu/MainMenu"
import Products from "../components/menu/productos/Products";
import ModalOrder from "../components/menu/productos/ModalOrder"
import FinalizeOrder from "../components/menu/FinalizeOrder.jsx"
import WaitOrder from "../components/menu/WaitOrder"
import Image from "next/image";

const Menu = () => {
  const [openModalId, setOpenModalId] = useState(null);
  const [showModalOrder, setShowModalOrder] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [infoCart, setInfoCart] = useState({
    products: [],
    customer: null,
    table: null,
  });
  const [clickSaucer, setClickSaucer] = useState("menu-main");
  const [loading, setLoading] = useState(null);

  const fetchSendOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/api/cart/sendOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(infoCart),
        }
      );

      if (response.ok) {
        setLoading(false);
        setInfoCart({ producto: [], customer: null, table: null });
        setClickSaucer("wait-order");
      } else {
        console.error(
          "The request was not successful. Response status:",
          response.status
        );
      }
    } catch (error) {
      console.error("An error occurred while submitting the request:", error);
    }
  };
  const handleOpenModal = (menuId) => {
    setOpenModalId(menuId);
  };
  const handleCloseModal = () => {
    setOpenModalId(null);
  };
  const hanldeBtnCart = () => {
    setShowCart(!showCart);
  };
  const handleInfoCart = (name, image, subtotal, amount, price, additional) => {
    const productoExistente = infoCart.products.find(
      (product) => product.name === name
    );
    if (productoExistente) {
      const products = infoCart.products.map((product) => {
        if (product.name === name) {
          product.amount = amount;
          product.subtotal = subtotal;
          product.adicionales = adicionales;
        }
        return product;
      });
      setInfoCart({ ...infoCart, products });
    } else {
      const newItem = {
        name,
        image,
        subtotal,
        amount,
        price,
        additional,
      };
      setInfoCart((prevState) => ({
        products: [...prevState.products, newItem],
      }));
    }
  };
  function displayMenu(Saucer) {
    switch (Saucer) {
      case "menu-main":
        return <MainMenu setClickSaucer={setClickSaucer} />;
      case "hamburguesas":
      case "perros":
      case "picadas":
      case "bebida":
        return (
          <Products
            showModalOrder={showModalOrder}
            setShowModalOrder={setShowModalOrder}
            infoCart={infoCart}
            setInfoCart={setInfoCart}
            handleInfoCart={handleInfoCart}
            clickSaucer={clickSaucer}
            showCart={showCart}
            openModalId={openModalId}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            hanldeBtnCart={hanldeBtnCart}
          />
        );
      case "make-order":
        return (
          <FinalizeOrder
            fetchSendOrder={fetchSendOrder}
            setInfoCart={setInfoCart}
            infoCart={infoCart}
          />
        );
      case "wait-order":
        return <WaitOrder />;
    }
  }
  return (
    <>
      <div>
        <HeaderMenu setClickSaucer={setClickSaucer} />
        {loading && (
          <div className=" overlay w-screen flex justify-center items-center fixed ">
            <Image
              className=" text-center w-40 h-40 lg:ml-52"
              alt="Logo-BK"
              src="/kb.gif"
              width={400}
              height={500}
              priority
            />
          </div>
        )}
        <div className=" bg-orange-200  h-full min-h-min  ">
          {displayMenu(clickSaucer)}
          {showModalOrder && (
            <ModalOrder
              setClickSaucer={setClickSaucer}
              setShowModalOrder={setShowModalOrder}
            />
          )}
        </div>
        <FooterMenu />
      </div>
    </>
  );
};

export default Menu;
