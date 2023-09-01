import Image from "next/image";
import Link from "next/link";

function FooterMenu() {
  return (
    <div className=" fixed bottom-0  bg-black  h-14 w-full flex  items-center mt-9 px-4">
      <div className=" flex justify-between w-full md:justify-center">

        <div className=" text-white font-medium mr-5">
        Keej Burger | © 2023</div>

            <div className="flex mx-4  gap-4 items-center ">
                <Link href="https://www.tiktok.com/@keejburger1?_t=8fHz7C97cUH&_r=1">
                    <Image
                    className="rounded-md"
                    src="/tik-tok.png"
                    alt=" imagen platillo "
                    width={25}
                    height={25}
                    priority
                    />
                </Link>
                <Link href="https://instagram.com/keejburger?igshid=MzRlODBiNWFlZA==">
                    <Image
                    className="rounded-md"
                    src="/instagram.png"
                    alt=" imagen platillo "
                    width={25}
                    height={25}
                    priority
                    />
                </Link>
            </div>
      </div>
    </div>
  );
}

export default FooterMenu;
