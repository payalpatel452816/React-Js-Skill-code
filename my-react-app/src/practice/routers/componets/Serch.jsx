import React, { useState } from 'react';
import './Serch.css'

const Serch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchRecipes = async (term) => {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${Serch}`;

        setLoading(true);
        setError('');
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setRecipes(data.meals || []);
        } catch (err) {
            setError('Error fetching recipes');
            setRecipes([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
            fetchRecipes(searchTerm);
        } else {
            setError('Please enter a recipe name');
        }
    };

    return (
        <div className="container">
            <h1>Coffee and Toast Recipes</h1>
            <div className="search-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter 'coffee' or 'toast'..."
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

export default Serch;
