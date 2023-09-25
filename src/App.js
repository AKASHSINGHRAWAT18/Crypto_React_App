import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Coins from "./Component/Coins";
import CoinsDetails from "./Component/CoinDetails";
import Exchanges from "./Component/Exchanges";
import Footer from "./Component/Footer";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/coin/:id" element={<CoinsDetails/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
