import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        difficulty: '',
        ingredients: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleIngredientsChange = (event) => {
        const { value } = event.target;
        setRecipe({ ...recipe, ingredients: value.split(',') });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to submit the recipe to the server
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nom :</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={recipe.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Difficulté :</label>
                <select
                    className="form-control"
                    name="difficulty"
                    value={recipe.difficulty}
                    onChange={handleChange}
                >
                    <option value="facile">Facile</option>
                    <option value="moyen">Moyen</option>
                    <option value="difficile">Difficile</option>
                </select>
            </div>
            <div className="form-group">
                <label>Ingrédients :</label>
                <textarea
                    className="form-control"
                    name="ingredients"
                    value={recipe.ingredients.join(',')}
                    onChange={handleIngredientsChange}
                />
            </div>
            <button className="btn btn-primary" type="submit">Ajouter la recette</button>
        </form>
    );
};

export default AddRecipeForm;

