import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CarouselDefault from './components/CarouselDefault';

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={ <Header /> } />
      <Route path="/carousel" element={ <CarouselDefault /> } />
    </Routes>
    </>
  );
}

export default App;
