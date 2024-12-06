import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <h2 className="text-4xl">Navbar</h2>
      <Outlet />
      <h3 className="text-2xl">Footer</h3>
    </>
  );
}
