import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const AddRecipeForm = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        difficulty: '',
        ingredient: [''],
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setRecipe({...recipe, [name]: value});
    };
    const handleIngredientChange = (event) => {

    }

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
                {
                    recipe.ingredient.map((_, index) => {
                        return (
                            <div className="add-ingredient-bloc">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ingredient"
                                    value={recipe.ingredient[index]}
                                    onChange={handleIngredientChange}
                                    key={uuidv4()}
                                />
                                <button className="btn btn-secondary">+</button>
                            </div>
                        )
                    })
                }

            </div>
            <button className="btn btn-primary" type="submit">Ajouter la recette</button>
        </form>
    );
};

export default AddRecipeForm;

