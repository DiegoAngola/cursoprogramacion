import { Routes, Route } from 'react-router-dom';

import Login from "./routes/Login";

const App = () => {

  return (
    <>
      <h1>APP</h1>
      <Routes>

        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  );
};

export default App
