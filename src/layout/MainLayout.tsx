import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";

const MainLayout = () => {
  return (
    <ContextProvider>
      <Outlet />
    </ContextProvider>
  );
};

export default MainLayout;
