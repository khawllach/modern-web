import { useEffect, useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  const [scroll, setscroll] = useState(false);

  useEffect(() => {
    function handlescroll() {
      setscroll(window.scrollY > 50);
    }

    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-hidden">
      <Navbar scrolled={scroll} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
