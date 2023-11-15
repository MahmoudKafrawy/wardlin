import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { navBarItems } from "../../config/navBarItems";

export function NavBarItems() {
  const { pathname } = useLocation();
  return (
    <ul className="flex gap-5">
      {navBarItems.map(({ name, link }, index) => (
        <li key={index}>
          {link.includes("#") ? (
            <NavHashLink to={link} smooth>
              {name}
            </NavHashLink>
          ) : (
            <Link to={link} className={`uppercase ${pathname === link && "underline"}`}>
              {name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
