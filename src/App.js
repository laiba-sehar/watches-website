
import './App.css';
// import Catagory from './components/catagory/Catagory';
// import Detail from './components/detail/Detail';
// import Edit from './components/edit/Edit';
import Footer from './components/footer/Footer';
// import LatestCollection from './components/latest/LatestCollection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Reviews from './components/reviews/Reviews';
// import Slider from './components/slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './pages/main/Main';
import About from './pages/about/About';
import Technology from './pages/technology/Technology';
import Contact from './pages/contact/Contact';
import Tips from './pages/tips/Tips';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Main/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/technology' element={<Technology/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/tips' element={<Tips/>}/>

    </Routes>
    <Footer/>
    
    </Router>

    </div>
  );
}

export default App;
