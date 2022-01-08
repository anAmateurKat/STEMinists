import './App.css';
import {Home} from './pages/Home/Home';
import {Form} from './pages/Form/Form';
import Recommendations from './pages/Recommendations';
import Header from './components/Header/index';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/form' element={<Form />} />
          <Route index path='/recommendations' element={<Recommendations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
