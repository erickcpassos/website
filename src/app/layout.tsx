
import styles from './main.module.scss';
import { IBM_Plex_Mono, Libre_Baskerville } from 'next/font/google'
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className={`${styles.global}`}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
