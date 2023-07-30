import {Routes, Route, BrowserRouter} from "react-router-dom";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

export default function App()
{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/analytics" exact element={<Analytics />}></Route>
          <Route path="/settings" exact element={<Settings />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
} 


