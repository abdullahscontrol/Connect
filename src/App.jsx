import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Navbar from "./componet/Navbar";
import Account from "./pages/Account";
import SignIn from "./pages/Signing";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App;
