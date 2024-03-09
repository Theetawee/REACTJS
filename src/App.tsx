import { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
import  { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "./components/common/CommonError";




const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<MainLayout />} path="/">
      <Route index element={<HomePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ])
);

const App = () => {
  return (
    <ErrorBoundary fallback={<CommonError/>}>
      <RouterProvider router={router} />
      <Toaster/>
    </ErrorBoundary>
  );
};

export default App;
