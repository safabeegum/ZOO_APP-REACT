
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/view' element={<View/>}/>    
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
