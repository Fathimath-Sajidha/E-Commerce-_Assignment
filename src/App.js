import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import RootLayout from './Components/RootLayout/RootLayout.jsx';
import Jewelery from './Components/Products/Categories/Jewel/Jewelery.jsx';
import Electronics from './Components/Products/Categories/Electronics/Electronics.jsx';
import MensCloths from './Components/Products/Categories/MensCloths/MensCloths.jsx';
import WomensClothes from './Components/Products/Categories/WomensCloths/WomensClothes.jsx';
import { createContext } from 'react';


const DataContext=createContext(null)
function App() {
  return (
    <DataContext.Provider >
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />

        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          
        </Route>
        <Route path='Jewelery' element={<Jewelery/>}></Route>
        <Route path='Electronics' element={<Electronics/>}></Route>
        <Route path='MensClothing' element={<MensCloths/>}></Route>
        <Route path='WomensClothing' element={<WomensClothes/>}></Route>
        
    </Routes>
    </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
export {
  DataContext
}