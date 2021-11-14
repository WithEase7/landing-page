import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
