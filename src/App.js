import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext, useContext, useState } from 'react';
import Deals from './pages/Deals';


const MyContext = createContext();

function App() {

  const [isTogglesSidebar, setIsToggleSidebar] = useState(false);
  

const values={
  isTogglesSidebar,
  setIsToggleSidebar
  

}

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header />
      <div className='main d-flex'>
        <div className={'sidebarWrapper'}>
          <Sidebar />
        </div>
        <div className={'dashboard-ui'}>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
            <Route path="/deals" exact={true} element={<Deals />} />
          </Routes>
        </div>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
