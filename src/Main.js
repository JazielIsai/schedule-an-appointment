import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from './Pages/Footer';
import { DataGeneralContext } from "./Context/DataGeneralContext";
import Nav from "./Routes/Nav";
import RoutesNav from "./Routes/RoutesNav";

function Main() {
  const [showNav, setShowNav] = useState(false);

  return (
    <BrowserRouter>

      <DataGeneralContext.Provider 
        value = { {
          showNav, 
          setShowNav
        } }
      >

        <Header />
        <Nav showNav = { showNav } setShowNav = { setShowNav } />
        <main className="main">
          <RoutesNav />
        </main>
        <Footer />
      
      </DataGeneralContext.Provider> 

    </BrowserRouter>
  );
}

export default Main;

//  https://www.facebook.com/Psic-Carlos-S%C3%A1nchez-102888175443969