import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicio from './components/PaginaInicio';
import Checkout from './components/Checkout'; // Importa tu nueva página de checkout
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Reviews/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
