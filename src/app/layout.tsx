import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import { } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:[ "100","500","400" , "700"],
});



export const metadata: Metadata = {
  title: "Trx Travel",
  description: "Travel App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${poppins.variable}  antialiased`}>
      <body
        
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
