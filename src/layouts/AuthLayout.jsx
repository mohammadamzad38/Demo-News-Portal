import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
  return (
    <div className="bg-[#F3F3F3]">
      <header className="py-6 w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <Outlet />
    </div>
  );
}
