import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Social from "./components/Social"

function App() {
  return (
    <div className="main-content">
       <Info />
       <About />
       <Interests />
       <Social />
    </div>
    // <div className="App">
    //   <Header />
    //   <Main />
    //   <Footer />
    // </div>
  );
}

export default App;