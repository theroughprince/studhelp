import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Blog1 from './Blog/Blog1';
import Blog2 from './Blog/Blog2';
import Blog3 from './Blog/Blog3';
import Blog4 from './Blog/Blog4';
import Blog5 from './Blog/Blog5';
import Blog6 from './Blog/Blog6';


function BlogList() {
  return (
    <>
    <switch>
    <Routes>
    <Route path="/blog1" Component={Blog1}></Route>
    <Route path="/blog2" Component={Blog2}></Route>
    <Route path="/blog3" Component={Blog3}></Route>
    <Route path="/blog4" Component={Blog4}></Route>
    <Route path="/blog5" Component={Blog5}></Route>
    <Route path="/blog6" Component={Blog6}></Route>
    </Routes>
    </switch>
    </>
  );
}

export default BlogList;
