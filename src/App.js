import {Link, Route, Routes} from "react-router-dom";

import {Albums, Comments, Home, Todos, Post} from "./components";


function App() {
  return (
    <div className="App">
      <ul>
          <li><Link to={'/'}>Home page</Link></li>
        <li><Link to={'/todos'}>All todos page</Link></li>
        <li><Link to={'/albums'}>All albums page</Link></li>
        <li><Link to={'/comments'}>All comments page</Link></li>
      </ul>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path={'todos'} element={<Todos/>}/>
        <Route path={'albums'} element={<Albums/>}/>
        <Route path={'comments'} element={<Comments/>}>
            <Route path={'posts/:id'} element={<Post/>}/>

        </Route>

      </Routes>



    </div>
  );
}

export default App;
