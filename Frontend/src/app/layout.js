import './globals.css'
import Head from 'next/head'



export const metadata = {
  title: 'Keej-Burger',
  description: 'Keej Burguer',
  charset: "UTF-8"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
       <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any"/>
        <meta charSet={metadata.charset} />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>{metadata.title}</title>
      </Head>
      <body>{children}</body>
    </html>
  )
}
