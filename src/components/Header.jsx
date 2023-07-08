import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
   const navItems = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
   ];

   return (
      <AppBar position="static">
         <Toolbar className="bg-white">
            <Typography variant="h6" className="text-black">
               <Link to={"/"}>Form Traverse</Link>
            </Typography>
            <div className="flex ml-auto sm:hidden">
               {navItems.map((item) => (
                  <Link
                     key={item.label}
                     to={item.path}
                     className="text-black px-2 hover:underline cursor-pointer"
                  >
                     <Typography variant="h6">{item.label}</Typography>
                  </Link>
               ))}
            </div>
         </Toolbar>
      </AppBar>
   );
};

export default Header;
