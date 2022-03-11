import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { DataGeneralContext } from "./Context/DataGeneralContext";
import Nav from "./Routes/Nav";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <BrowserRouter>


      <DataGeneralContext.Provider 
        value = { {
          showNav, 
          setShowNav
        } }
      >
        <Header/>
        <Nav showNav = { showNav } />

      </DataGeneralContext.Provider> 

    </BrowserRouter>
  );
}

export default App;

//  https://www.facebook.com/Psic-Carlos-S%C3%A1nchez-102888175443969