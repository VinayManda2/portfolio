import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-4xl m-auto relative">
      <Header />
      <main className="relative mt-20">
        <Intro />
        <Projects />
        <Technologies />
        <Skills />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

// export default App;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
