import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <p>Hello</p>
      <Outlet />
    </div>
  );
}

export default App;
