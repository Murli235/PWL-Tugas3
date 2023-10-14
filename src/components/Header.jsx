import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="navheader">
        <div className="navheadercap">
          <h1>
            Hai, ini tugas <span>MURLIANA</span>
          </h1>
          <p>Mahasiswa IF20</p>
        </div>
      </div>
      <ul className="menu">
        <li>
          <NavLink to="/">Beranda</NavLink>
        </li>
        <li>
          <NavLink to="/kontak">Kontak</NavLink>
        </li>
        <li>
          <NavLink to="/tentang">Tentang</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
