import {  Link, Outlet } from "react-router-dom";
import './styles.css'


export default function ImageLayout() {

  return (
    <>
      <h1>Binvenue dans la gallerie</h1>
      <nav>
        <ul>
          <li>
            <Link to="turtle">Turtle</Link>
          </li>
          <li>
            <Link to="tiger">Tiger</Link>
          </li>
          <li>
            <Link to="rat">Rat</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  );
}
