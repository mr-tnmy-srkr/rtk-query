import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../page/ErrorPage";
import Query from "../page/Query";
import Mutation from "../page/Mutation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      {/* <Route index element={<App />} /> */}
      <Route
        path="query"
        element={<Query />}
        //   loader={contactLoader}
        //   action={contactAction}
      />
      <Route
        path="mutation"
        element={<Mutation />}
        //   loader={contactLoader}
        //   action={contactAction}
      />
    </Route>
  )
);
export default router;
