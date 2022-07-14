





















import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/views/Home/Home/Home';
import Register from './components/views/Register/Register';
import Header from './components/views/Header/Header';

function App() {

   return (

      <>
         <Header />
         <div id='mainContent'>
            <Routes>
               <Route path="" element={<Home />} />
               <Route path="/" element={<Home />} />
               <Route path="/register" element={<Register />} />
            </Routes>
         </div>
      </>

   )

}

export default App;
