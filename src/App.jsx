import "./App.css";
import "./index.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#f1f2f4] overflow-x-hidden flex flex-col font-sans">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
