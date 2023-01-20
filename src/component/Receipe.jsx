import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function Receipe(props) {
    const [receipe, setReceipe] = useState(props.receipe)

    useEffect(() => {
        console.log(props.receipe)
    })

    return (
        <tr>
            <td>{receipe.name}</td>
            <td>{receipe.difficulty}</td>
            <td>
                <ul>
                    {
                        receipe.ingredient.map((ingre) => {
                            return <li key={uuidv4()}>{ingre}</li>
                        })
                    }
                </ul>
            </td>
        </tr>
    );
}

export default Receipe;