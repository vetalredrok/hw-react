import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./MainLayout";


function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index element={<Navigate to={'home'}/>}/>
        <Route path={'home'} element={<H}

      </Route>



    </Routes>
  );
}

export default App;
