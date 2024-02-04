import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
