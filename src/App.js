import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Members from "./components/Dashboard/Members";
import Tasks from "./components/Dashboard/Tasks";
import Login from "./components/Home/Login";
import { PrivateRoutes } from "./components/routes/PrivateRoutes";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
