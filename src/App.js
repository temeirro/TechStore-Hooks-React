import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Menu from './components/Menu';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header>
        <h1 className='head'>Welcome</h1>
        <Menu/>
        
      </header>
      <main>
      
        <Routes>
         
          <Route path="/" element={<Shop/>}/>
          <Route path="cart" element={<Cart/>}/>
        
        
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
