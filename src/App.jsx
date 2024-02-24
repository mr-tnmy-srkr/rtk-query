import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Link to={`/query`}>
        <button className="px-2 border mr-3">Query</button>
      </Link>
      <Link to={`/mutation`}>
        <button className="px-2 border">Mutation</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
