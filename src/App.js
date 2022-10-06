import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./MainLayout";
import {CommentsPage, OnePostPage, OneUserPage, PostsPage, UsersPage} from "./Pages";


function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'users'}/>}/>
          <Route path={'users'} element={<UsersPage/>}/>
          <Route path={'users/:id'} element={<OneUserPage/>}/>
          <Route path={'posts'} element={<PostsPage/>}/>
          <Route path={'posts/:id'} element={<OnePostPage/>}/>
          <Route path={'comments'} element={<CommentsPage/>}/>
      </Route>



    </Routes>
  );
}

export default App;
