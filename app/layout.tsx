import "./globals.css";
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body     className= {`${josefinSans.className} m-0 p-0 border-0 box-border bg-white`}>
        {children}
      </body>
    </html>
  );
}
