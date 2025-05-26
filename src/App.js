import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';

import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Error from './Pages/Error';

import Plan from './Pages/Desktop/Plan';
import Session from './Pages/Desktop/Session';
import Stat from './Pages/Desktop/Stat';

import CurrentSession from './Pages/Mobile/CurrentSession';
import EditPlans from './Pages/Mobile/EditPlans';
import Plans from './Pages/Mobile/Plans';
import Sessions from './Pages/Mobile/Sessions';
import Stats from './Pages/Mobile/Stats';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/session' element={isDesktop ? <Session/> : <Sessions/>}/>
        <Route path='/session/current' element={isDesktop ? <Session/> : <CurrentSession/>}/>
        <Route path='/plan' element={isDesktop ? <Plan/> : <Plans/>}/>
        <Route path='/plan/edit' element={isDesktop ? <Plan/> : <EditPlans/>}/>
        <Route path='/stat' element={isDesktop ? <Stat/> : <Stats/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
