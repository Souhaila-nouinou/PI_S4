import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Doctors from './components/Doctors';
import Footer from './components/Footer';
import Icons from './components/Icons';
import Navbar from './components/Navbar';
import Review from './components/Review';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Icons/>
      
      <About/>
      <Doctors/>
      <Review/>
      <Blogs/>
      <Footer/>

    </div>
  );
}

export default App;
