
import Home from "./components/Home";
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
