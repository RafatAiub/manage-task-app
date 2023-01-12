import { Navbar } from "react-daisyui";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Members from "./components/Dashboard/Members";
import Tasks from "./components/Dashboard/Tasks";
import { PrivateRoutes } from "./components/routes/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          {PrivateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="tasks" element={<Tasks />}></Route>
            <Route path="members" element={<Members />}></Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
