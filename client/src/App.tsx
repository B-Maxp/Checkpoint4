import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />

      <Outlet />

      <ToastContainer />
    </>
  );
}

export default App;
