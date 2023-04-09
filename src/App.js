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
      
    <Route path="/studhelp/" Component={Home}></Route>
    <Route path="/studhelp/blog" Component={Blog}></Route>
    <Route path="/studhelp/Contact" Component={Contact}></Route>
    <Route path="/studhelp/Team" Component={Team}></Route>
    </Routes>
    </switch>
    </>
  );
}

export default App;
