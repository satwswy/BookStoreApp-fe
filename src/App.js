import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
