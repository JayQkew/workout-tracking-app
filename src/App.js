import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Error from './Pages/Error';

import Plan from './Pages/Plan';
import Session from './Pages/Session';
import Stat from './Pages/Stat';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/session' element={<Session/>}/>
        <Route path='/plan' element={<Plan/>}/>
        <Route path='/stat' element={<Stat/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
