import React from "react";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Main from "./pages/Main.js";


import { Route, Routes} from "react-router-dom";


function App() {
  return ( 
    <div>
      <main>
    <Routes>
      
          <Route path="/" element={<Main />}/> 
          <Route path="/login" element={<Login />}/> 
          <Route path="/register" element={<Register />}/> 

    </Routes>
    </main>
    
    </div>
  );
  
}

export default App ;