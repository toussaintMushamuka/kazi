import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";

function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Project />
      </div>
      <Footer />
    </div>
  );
}

export default App;
