import React, {useEffect, useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function AddRecipeForm() {
    const [name, setName] = useState('')
    const [difficulty, setDifficulty] = useState(1)
    const [ingredient, setIngredient] = useState([''])

    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[ingredient.length - 1].focus();
    }, [ingredient]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleIngredientChange = (event, index) => {
        const newIngredients = [...ingredient];
        newIngredients[index] = event.target.value;
        setIngredient(newIngredients);
    }

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value)
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
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="form-group">
                <label>Difficulté :</label>
                <select
                    className="form-control"
                    name="difficulty"
                    value={difficulty}
                    onChange={handleDifficultyChange}
                >
                    <option value="facile">1</option>
                    <option value="moyen">2</option>
                    <option value="difficile">3</option>
                </select>
            </div>
            <div className="form-group">
                <label>Ingrédients :</label>
                {
                    ingredient.map(
                        (_, index) => {
                            return (
                                <div className="add-ingredient-bloc" key={uuidv4()}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ingredient"
                                        value={ingredient[index]}
                                        onChange={(event) => handleIngredientChange(event, index)}
                                        ref={(el) => inputRefs.current[index] = el}
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



