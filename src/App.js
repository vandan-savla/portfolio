import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import Card from "./components/Card/Card";




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <About id = "about"></About>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
