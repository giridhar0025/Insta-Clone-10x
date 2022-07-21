import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingpage';
import Postview from './components/postview';
// import LandingPage from './components/landingpage';
import Form from './components/form'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>} exact />
    <Route path="/postview" element={<Postview/>}/>
    <Route path="/form" element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

