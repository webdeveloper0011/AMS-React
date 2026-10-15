import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import frontendRoutes from "./frontend/FrontendRoutes";
// import AdminRoutes from "../admin/adminRoutes";

const router = createBrowserRouter([
  ...frontendRoutes,
//   ...AdminRoutes
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;