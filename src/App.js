





















import './App.css';
import Header from './components/views/Home/Header/Header';
import Footer from './components/views/Home/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/views/Home/Home/Home';

function App() {

   return (

   <>
      <Routes>
         <Route path="" element={<Home />} />
         {/* <Route path="/" element={<Home />} /> */}
      </Routes>
   </>

   )

}

export default App;
