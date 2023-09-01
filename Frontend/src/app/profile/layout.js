import "@/app/globals.css";
import HeaderAdmin from "@/components/profile-admin/HeaderAdmin";



export const metadata = {
  title: "KB | Home",
  description: "Keej Burguer",
  charset: "UTF-8",
};

export default function ProfileLayout({ children }) {
  return (
    <div className="lg:flex">
      <HeaderAdmin />
      <div className=" bg-container">
        {children}
      </div>
    </div>
  );
}

