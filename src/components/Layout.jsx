import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <a href="/">
          <button disabled={location.pathname === "/"}>Main</button>
        </a>
        <Link to="/settings">
          <button disabled={location.pathname === "/settings"}>Settings</button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;