import './App.css';
import Main from "./components/Main/Main"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Videos from "./components/Videos/Videos"

function App() {
  return (
    <div className="App top-0 left-0">
      <Main />
      <About /> 
      <Videos />
      <Footer />
    </div>
  );
}

export default App;
