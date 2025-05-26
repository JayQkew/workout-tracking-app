import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';

import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Error from './Pages/Error';

import Plan from './Pages/Desktop/Plan';
import Session from './Pages/Desktop/Session';
import Stat from './Pages/Desktop/Stat';

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
    </BrowserRouter>
  );
}

export default App;
