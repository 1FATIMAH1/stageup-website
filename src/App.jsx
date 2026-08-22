import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-ink">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Process />
      <Gallery />
      <Industries />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
