import './App.css';
import Home from './pages/Home/index';
import Form from './pages/Form';
import Recommendations from './pages/Recommendations';
import Header from './components/Header/index';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Form />
    </div>
  );
}

export default App;
