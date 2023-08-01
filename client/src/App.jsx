import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/authContext";
import Feed from "./pages/Feed";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { Editor } from "./components/Lexical";
import { PostProvider } from "./context/postContext.jsx";
import Post from './components/Post.jsx';
import Perfil from './pages/Perfil.jsx';

function App() {
  return (
    <>
      <AuthProvider>
        <PostProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/editor" element={<Editor />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/feed" element={<Feed />} />
                <Route path="/post" element={<Post />} />
                <Route path="/perfil" element={<Perfil />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PostProvider>
      </AuthProvider>
    </>
  );
}

export default App;
