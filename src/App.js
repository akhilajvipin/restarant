import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Restview from './pages/RestView';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='restarent_view/:id' element={<Restview/>}/>
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
