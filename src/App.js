import './App.css';
import Navegation from './components/navegation';
import Home from './components/home';
import Consult from './components/consult';
import { Register } from './components/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Footer from './components/footer';
import { Register_user } from './components/register_user';
import { Register_time } from './components/register_time';
import { Register_act } from './components/register_act';
import Consult_user from './components/consult_user';
import Consult_time from './components/consult_time';
import Consult_act from './components/consult_act';


function App() {
  return (
    <div className="App">

      <Navegation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/register_pag' element={<Register/>}></Route>
          <Route path='/register_user' element={<Register_user/>}></Route>
          <Route path='/register_time' element={<Register_time/>}></Route>
          <Route path='/register_act' element={<Register_act/>}></Route>
          <Route path='/consult_pag' element={<Consult/>}></Route>
          <Route path='/consult_user' element={<Consult_user/>}></Route>
          <Route path='/consult_time' element={<Consult_time/>}></Route>
          <Route path='/consult_act' element={<Consult_act/>}></Route>
          <Route path='/consult_' element={<Consult/>}></Route>
          <Route path='/login_pag' element={<Login/>}></Route>
        </Routes>
        
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
