import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
   const navItems = ["Home", "About", "Contact"];

   return (
      <AppBar position="static">
         <Toolbar className="bg-white">
            <Typography variant="h6" className="text-black">
               Form Traverse
            </Typography>
            <div className="flex ml-auto">
               {navItems.map((item) => (
                  <Typography
                     key={item}
                     variant="h6"
                     className="text-black px-2 hover:underline cursor-pointer"
                  >
                     {item}
                  </Typography>
               ))}
            </div>
         </Toolbar>
      </AppBar>
   );
};

export default Header;
