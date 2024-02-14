import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div class="appMain">
      <div style={{flex : '0 1 auto'}}></div>
      <div style={{flex: '1 1 auto'}} >
      {children}
        </div>
        </div>
        
       </body>
    </html>
  );
}
