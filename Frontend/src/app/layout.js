import "./globals.css";

export const metadata = {
  title: 'Keej-Burger',
  description: 'Keej Burguer',
  charset: "UTF-8"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  )
}
