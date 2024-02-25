import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import Purchase from "./Components/Purchase";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <About />
      <Purchase />
      <Footer />
    </div>
  );
}

export default App;
