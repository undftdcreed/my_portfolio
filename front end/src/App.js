import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { aboutLoader, projectsLoader } from "./loaders.js";
import { useEffect, useState } from "react";
import "./Projects.css";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [aboutInfo, setAboutInfo] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
   const fetchAbout = async () => {
    try{ 
      const data = await aboutLoader();
      setAboutInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchAbout();
 }, []);

 useEffect(() => {
 const fetchProjects = async () => {
   try{ 
     const data = await projectsLoader();
     setProjects(data);
   } catch (error) {
     console.log(error);
   }
 };
 fetchProjects();
}, []);

const toggleDarkMode = () => {
  setIsDarkMode((prevMode) => !prevMode);
};

if (!projects || !aboutInfo) {
  return (<h1>Loading.....</h1>)
}

return (
  
    <ThemeProvider value={{ isDarkMode, toggleDarkMode }}> {/* Pass the value to ThemeProvider */}
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About about={aboutInfo} />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  
);
}
export default App;
