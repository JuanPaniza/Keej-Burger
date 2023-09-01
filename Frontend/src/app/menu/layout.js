import "@/app/globals.css"




export const metadata = {
  title: 'KB | Menu',
  description: 'Keej Burguer',
  charset: "UTF-8"
}

export default function MenuLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}
