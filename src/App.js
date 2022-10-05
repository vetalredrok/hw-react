import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./MainLayout";
import {UsersPage} from "./Pages/UsersPage/UsersPage";


function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index element={<Navigate to={'users'}/>}/>
        <Route path={'users'} element={<UsersPage/>}/>

      </Route>



    </Routes>
  );
}

export default App;
