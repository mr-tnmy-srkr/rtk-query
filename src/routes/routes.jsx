import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../page/ErrorPage";
import Feed from "../page/Feed";
import Rtk from "../page/Rtk";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Feed />} />
      <Route
        path="rtk-query"
        element={<Rtk />}
        //   loader={contactLoader}
        //   action={contactAction}
      />
    </Route>
  )
);
export default router;
