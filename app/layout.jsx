import Header from "../components/Header/Header"

export const metadata = {
  title: 'Page title',
  description: 'Page description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
