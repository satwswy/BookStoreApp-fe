import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
