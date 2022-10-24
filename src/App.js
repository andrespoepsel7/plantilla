import {Route, Routes} from 'react-router-dom'
// Ruta protegida
import ProtectedRoute from './components/ProtectedRoute';
// Views
import Home from './views/Home';
import Login from './views/Login';
//Context
import DataProvider from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/inicio' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      </Routes>
    </DataProvider>
   
  );
}

export default App;
