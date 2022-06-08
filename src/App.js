import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import TopHeading from "./components/TopHeading";
import ImgGallery from "./components/ImgGallery";
function App() {
  return (
    <div className="App">
      <Navbar />
      <TopHeading />
      {/* <Header /> */}
      <ImgGallery />
    </div>
  );
}

export default App;
