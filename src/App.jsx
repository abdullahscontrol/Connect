import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Footer from "./componet/footer";
import Hero from "./componet/Hero";
// import '/footer.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <div className="hero"></div>
      <div className="sections">
        <div className="section">
          <h1>Connect</h1>
          <p>Connect with anyone, anywhere. All their links,
            one click away." (Simple and direct)</p>
        </div>
        <div className="section">  <form action="">
          <div className="inputs">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" log id="submit" />
          Sign Up
        </form>
        </div>
      </div>
      <div className="sections">
        <div className="section">
        </div>
        <div className="section"></div>
      </div>
      <Hero />
      {/* <Footer /> */}
    </div>
  )
}

export default App;
