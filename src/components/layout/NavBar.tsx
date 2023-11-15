import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavBarItems } from "./NavBarItems";
export function NavBar() {
  return (
    <header>
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center h-20 ">
        <Link to={"/"}>
          <div className="flex gap-2 items-center">
            <img src="./wardlin_logo.jpg" width={45} alt="logo" />
            <p className="text-xl font-medium">Wardlin</p>
          </div>
        </Link>

        <NavBarItems />

        <Button variant="text" size="small">
          Login
        </Button>
      </nav>
    </header>
  );
}
