import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import HomeBody from "./routes/Home/HomeBody";
import Promotion from "./routes/Home/Promotion";
import Scription from "./routes/Scription/scription";

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to="/home"/>} />
            <Route path="home" element={<HomeBody />} />
            <Route path="promotion" element={<Promotion />} />
          </Route>

          <Route path="scription" element={<Scription />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App
