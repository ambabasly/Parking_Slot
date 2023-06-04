import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import {Home }from "./components/Home";
import {GarageProvider} from "./context/CarContext";

export function App() {
  return (
    <>
      <GarageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GarageProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
