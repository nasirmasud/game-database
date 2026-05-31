import { Roboto } from "next/font/google";
import SideBar from "./components/SideBar";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${roboto.className} bg-[#0b0e14] text-white`}>
      <body>
        <div className='flex h-screen w-screen overflow-hidden'>
          <SideBar />
          <main className='flex-1 h-full overflow-y-auto'>{children}</main>
        </div>
      </body>
    </html>
  );
}
