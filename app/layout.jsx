export const metadata = {
  title: 'Page title',
  description: 'Page description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
