import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/write" element={user ? <Write /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
