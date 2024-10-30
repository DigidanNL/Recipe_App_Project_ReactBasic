import { useState } from "react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Functie om een recept te selecteren
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Functie om terug te gaan naar de lijst
  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      {!selectedRecipe ? (
        <RecipeListPage onSelectRecipe={handleRecipeSelect} />
      ) : (
        <RecipePage recipe={selectedRecipe} onBack={handleBackToList} />
      )}
    </>
  );
};
