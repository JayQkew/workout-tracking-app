import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
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
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/session' element={isDesktop ? <Session/> : <Sessions/>}/>
        <Route path='/plan' element={isDesktop ? <Plan/> : <Plans/>}/>
        <Route path='/stat' element={isDesktop ? <Stat/> : <Stats/>}/>
        <Route path='/plan/edit' element={isDesktop ? <Plan/> : <EditPlans/>}/>
        <Route path='/session/current' element={isDesktop ? <Session/> : <CurrentSession/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
