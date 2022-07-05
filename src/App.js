import { Outlet } from 'react-router-dom';

import './App.css';

import {Header, Footer} from './partials'

function App() {
  return (
    <div className="App">
      <Header/>
        <section className='Container'>
          <Outlet/>
        </section>
      <Footer/>
    </div>
  );
}

export default App;
