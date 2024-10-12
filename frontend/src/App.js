

import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Home from "./pages/Home";
import Blog from "./pages/Blog";



import { BrowserRouter,  
  Routes,  
  Route,  
  Link  } from "react-router-dom";
import Footer from "./Components/Footer";
import Services from "./pages/Services";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Blogsubpage from "./pages/Blogsubpage";



function App() {
  return (
    <BrowserRouter>
    <Header/>
  
   
    <Routes>

        <Route path="/" element={<Home />} />
       
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blogsubpage" element={<Blogsubpage />} />
        <Route path="/blog" element={<Blog />} />
        
        
      
    </Routes>
    <Footer/>
  </BrowserRouter>
  
    




  );
}

export default App;
