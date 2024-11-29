import React, { useState } from 'react';
import './recipe.css';

const Recipe = () => {
    const [recipeName, setRecipeName] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchRecipes = async () => {
        const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`; // Fixed variable name

        setLoading(true);
        setError('');
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setRecipes(data.meals || []); // Set meals or empty array if no meals found
        } catch (err) {
            setError('Error fetching recipes');
            setRecipes([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (recipeName.trim()) {
            fetchRecipes();
        } else {
            setError('Please enter a recipe name');
        }
    };

    return (
        <div className="container">
            <h1>Recipe App</h1>
            <div className="search-container">
                <input
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    placeholder="Enter a recipe name..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}
            <div id="recipeList">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div key={recipe.idMeal} className="recipe-item">
                            <h3>{recipe.strMeal}</h3>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
                        </div>
                    ))
                ) : (
                    !loading && <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default Recipe;
