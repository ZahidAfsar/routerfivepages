import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePageComponent from './Components/Pages/HomePageComponent';
import PageTwoComponent from './Components/Pages/PageTwoComponent';
import PageThreeComponent from './Components/Pages/PageThreeComponent';
import NavbarComponent from './Components/NavbarComponent';
import PageFourComponent from './Components/Pages/PageFourComponent';

function App() {
  return (
   <BrowserRouter>
   <NavbarComponent/>
   <Routes>
    <Route path='/' element={ <HomePageComponent/> }/>
    <Route path='PageTwo' element={ <PageTwoComponent/> }/>
    <Route path='PageThree' element={ <PageThreeComponent/> }/>
    <Route path='PageFour' element={ <PageFourComponent/> }/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
