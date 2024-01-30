import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={inter.className}>
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
