import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "./header";
import Navigation from "./navigation";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={inter.className}>
      <Header />
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
