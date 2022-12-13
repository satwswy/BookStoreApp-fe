import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './components/navbar/navbar.component';
import NotFound from './components/notFound/notFound.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home/>} />
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
