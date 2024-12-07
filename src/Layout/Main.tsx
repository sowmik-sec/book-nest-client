import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <h3 className="text-2xl">Footer</h3>
    </>
  );
}
