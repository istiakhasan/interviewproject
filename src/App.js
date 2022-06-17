
import './App.css';
import Catalogs from './components/Catalogs';
import {Routes,Route} from 'react-router-dom'
import CatalogBody from './components/CatalogBody';


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Catalogs />}> 
          <Route index element={<CatalogBody />}></Route>
         </Route>
        
      
      </Routes>
    </div>
  );
}

export default App;
