import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cta from "./components/cta/Cta";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Properties from "./components/properties/Properties";
import Team from "./components/team/Team";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Properties />
      <About />
      <Cta />
      <Faq />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
