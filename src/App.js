import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {PostsPage, UsersPage} from "./pages";


function App() {

  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'users'}/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>

      </Route>

    </Routes>
  );
}

export default App;
