// App.jsx
import {React, useEffect} from "react";
import Header from "./components/Header";
import '@fontsource/open-sans';
import '@fontsource/fira-code';
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const App = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <div className="bg-black h-screen w-full overflow-x-hidden cursor-none" id="scroll-container">
      <Cursor />
      {/* <SmoothScroll/> */}
      <Header />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Publications />
      <Footer />
    </div>
  );
};

export default App;
