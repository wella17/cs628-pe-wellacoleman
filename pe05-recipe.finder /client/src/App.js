// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/navbar";
// import { CreateRecipe } from "./pages/create-recipe";
// import { Home } from "./pages/home";
// import RecipeDetails from "./pages/RecipeDetails"; // Import the RecipeDetails component
// import EditRecipe from "./pages/EditRecipe"; // Import the EditRecipe component

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         {/* Welcome message without wrapping div */}
//         <p className="welcome-message">
//           "The 'Recipe.Finder' lets you explore, edit, and discover a world of culinary creations. Add, edit, and search for recipes, manage favorites, and explore new dishes. A must-have tool for all food enthusiasts." ..."@R.F"
//         </p>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/create-recipe" element={<CreateRecipe />} />
//           <Route path="/recipe-details/:id" element={<RecipeDetails />} /> {/* Recipe Details Page */}
//           <Route path="/edit-recipe/:id" element={<EditRecipe />} /> {/* Edit Recipe Page */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/navbar";
// import { CreateRecipe } from "./pages/create-recipe";
// import { Home } from "./pages/home";
// import RecipeDetails from "./pages/RecipeDetails";
// import EditRecipe from "./pages/EditRecipe";
// import RecipeList from "./pages/RecipeList"; // Import the RecipeList component

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         {/* Welcome message without wrapping div */}
//         <p className="welcome-message">
//           "The 'Recipe.Finder' lets you explore, edit, and discover a world of culinary creations. Add, edit, and search for recipes, manage favorites, and explore new dishes. A must-have tool for all food enthusiasts." ..."@R.F"
//         </p>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/create-recipe" element={<CreateRecipe />} />
//           <Route path="/recipe-details/:id" element={<RecipeDetails />} />
//           <Route path="/edit-recipe/:id" element={<EditRecipe />} />
//           {/* Add a route for RecipeList */}
//           <Route path="/recipe-list" element={<RecipeList />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import RecipeDetails from "./pages/RecipeDetails"; // Import the RecipeDetails component
import EditRecipe from "./pages/EditRecipe"; // Import the EditRecipe component

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="welcome-container">
          <p className="welcome-message">
            "The 'Recipe.Notebook' lets you explore, edit, and discover a world of culinary creations. Add, edit, and search for recipes, manage favorites, and explore new dishes. A must-have tool for all food enthusiasts." ..."@R.N"
          </p>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/recipe-details/:id" element={<RecipeDetails />} /> {/* Recipe Details Page */}
          <Route path="/edit-recipe/:id" element={<EditRecipe />} /> {/* Edit Recipe Page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
