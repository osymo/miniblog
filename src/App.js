import { Outlet } from 'react-router-dom';

import './App.css';

import { Home } from './pages'
import {Header, Footer} from './partials'

function App() {
  return (
    <div className="App">
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
