import { Inter } from "next/font/google";
import Header from "./header";
import Navigation from "./navigation";
import CompanyIcons from "./company-icons";
import { useRouter } from "next/router";
import Services from "./services";
import Posts from "./posts";
import Reviews from "./reviews";
import Experience from "./experience";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const currentPage = router.pathname.split("/")[1];

  const showCompanyIcons = currentPage === "product";

  return (
    <div className={inter.className}>
      <Header />
      <Navigation />
      {children}
      {showCompanyIcons && <CompanyIcons />}
      {!showCompanyIcons && (
        <>
          <Services />
          <Posts />
          <Reviews />
          <Experience />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
