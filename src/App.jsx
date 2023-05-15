
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './sass/app.scss';
import Users from './components/Users';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Users/>} />
            <Route path="/create" element={<Create/>}/>
            <Route path="/update/:id" element={<Edit/>}/>
         </Routes>
      </BrowserRouter>
   );
}

export default App
