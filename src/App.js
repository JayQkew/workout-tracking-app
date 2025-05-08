import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import Settings from './Pages/Settings';

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
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/session' element={true ? <Session/> : <Sessions/>}/>
        <Route path='/plan' element={true ? <Plan/> : <Plans/>}/>
        <Route path='/stat' element={true ? <Stat/> : <Stats/>}/>
        <Route path='/plan/edit' element={<EditPlans/>}/>
        <Route path='/session/current' element={<CurrentSession/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
