import './App.css';
// import Login from './Components/Login';
// import {BrowserRouter,Route,Routes} from "react-router-dom";
// import Home from './Components/Home';
// import ProtectedRoute from './Components/Protected';
// import About from './Components/About';
// import Page from './Components/Page';
// import Contact from './Components/Contact';
// import Personal from './Components/Personal';
import Callback from './Components/Callback';
import Memo from './Components/Memoo';



function App() {
  return (
    <>
    {/* <Callback/> */}
    <Memo/>
    {/* <BrowserRouter>
    <Routes>
       
        <Route path="/" element={<Login/>} />
        <Route path="/page" element={<Page/>} />
      
          <Route path="/home" element={<ProtectedRoute Component={Home} />} />
          <Route path="/about" element={<ProtectedRoute Component={About}/>} />
          
          <Route path="/contact" element={<ProtectedRoute Component={Contact} />} />
          <Route path="/personal" element={<ProtectedRoute Component={Personal} />} />
    </Routes>
    </BrowserRouter> */}
    
    </>
    
  );
}

export default App;
