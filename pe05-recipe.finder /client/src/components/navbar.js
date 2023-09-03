
// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="navbar" style={{ display: "flex" }}>
//         <div className="nav-link">Recipe.Finder</div>
//         <NavLink exact to="/" className="nav-link with-underline">
//           Home
//         </NavLink>
//         <NavLink to="/create-recipe" className="nav-link with-underline">
//           Create Recipe
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar" style={{ display: "flex" }}>
        <div className="nav-link">Recipe.Notebook</div>
        <NavLink to="/create-recipe" className="nav-link with-underline">
          Create Recipe
        </NavLink>
        <NavLink exact to="/" className="nav-link with-underline">
          Recipe Lists
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

