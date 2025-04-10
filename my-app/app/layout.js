import 'react-bootstrap'
import Header from './_component/header'
import '@/styles/globals.scss'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      
    </head>
      <body>
      <Header />
        {children}
      </body>
    </html>
  );
}
