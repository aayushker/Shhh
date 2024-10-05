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
      <main className="flex-grow dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center pt-16">
        <Learn />
      </main>
    </div>
  );
};

export default index;
