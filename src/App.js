import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Contact from './Pages/Contact';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <switch>
    <Routes>
      
    <Route path="/" Component={Home}></Route>
    <Route path="/blog" Component={Blog}></Route>
    <Route path="/Contact" Component={Contact}></Route>
    <Route path="/Team" Component={Team}></Route>
    </Routes>
    </switch>
    </>
  );
}

export default App;
