import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="about">À propos</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
          <li>
            <Link to="Animals">Animals</Link>
          </li>
        </ul>
      </nav>

      <main>
        {" "}
        <Outlet />
      </main>
    </>
  );
}
