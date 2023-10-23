import Image from "next/image"

function BtnCart({hanldeBtnCart}) {
  return (
    <> 
    <button onClick={hanldeBtnCart}>
    <Image
      className=" z-50 rounded-md fixed bottom-16 lg:bottom-24 lg:right-12  right-3  lg:hover:scale-110 transition-all shadow-xl "
      src="/carrito.png"
      alt=" imagen carrito "
      width={50}
      height={50}
      priority
    />
</button>
</>
  )
}

export default BtnCart;