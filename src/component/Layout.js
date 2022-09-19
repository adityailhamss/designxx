import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="relative">
        <div className="w-full relative mx-auto xl:max-w-screen-xl">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
