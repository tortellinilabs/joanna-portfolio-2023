import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProgressiveImage from './components/ProgressiveImage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={ <Header /> } />
      <Route path="/customimage" element={
        <ProgressiveImage
          src={require('./images/Tortellini.png')}
          placeholderSrc="./images/Small_Tortellini.png"
          width="700"
          height="700"
        /> } />
    </Routes>
    </>
  );
}

export default App;
