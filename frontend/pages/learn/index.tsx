import Footer from "@/components/Footer";
import Learn from "@/components/Learn";
import NavBar from "@/components/NavBar";
import "@/app/globals.css";

const index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="absolute top-0 left-0 w-full z-10">
        <NavBar activePage="/learn" />
      </header>
      <main className="flex-grow h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center pt-16">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Learn />
      </main>
      <footer className="flex-shrink-0 flex items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default index;
