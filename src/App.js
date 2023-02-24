import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
