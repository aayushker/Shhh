import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import "@/app/globals.css";

const index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="absolute top-0 left-0 w-full z-10">
        <NavBar activePage="/" />
      </header>
      <main className="flex-grow h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center pt-16">
        <Hero />
      </main>
      <footer className="flex-shrink-0 flex items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default index;
