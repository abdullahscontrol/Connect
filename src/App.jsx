import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Navbar from "./componet/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          {/* <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Navbar />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
