





















import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/views/Home/Home/Home';
import Register from './components/views/Register/Register';
import Header from './components/views/Header/Header';
import Login from './components/views/Login/Login';

function App() {
   
   return (

      <>
         <Header isLoggedIn={false}/>
         <div id='mainContent'>
            <Routes>
               <Route path="" element={<Home />} />
               <Route path="/" element={<Home />} />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<Login />} />
            </Routes>
         </div>
      </>

   )

}

export default App;
