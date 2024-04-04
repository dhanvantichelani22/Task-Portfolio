import HomePage from './Pages/Home';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/About';
import ServicePage  from './Pages/Service';
import ContactPage  from './Pages/Contact';


function App() {
  return (
    <div className="App">
      
      {/* main page content */}
      <BrowserRouter> 
      <Routes>
      <Route index path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
