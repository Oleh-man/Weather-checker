import Main from "./containers/Main";
import Header from "./components/Header";
import Comparison from "./containers/Comparison";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='comparison' element={<Comparison />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
