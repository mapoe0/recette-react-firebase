import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./firebase_config";
import {v4 as uuidv4} from 'uuid';
import Receipe from "./component/Receipe";
import './App.css';
import AddRecipeForm from "./component/AddRecipeForm";

function App() {
    // on utilise useState pour gérer l'état (en local) de nos receipe
    const [receipes, setReceipes] = useState([])
    // on créer un object load pour gérer le chargement
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const fetchReceipe = async () => {
            // on créer un objet qui va stocker les résultats
            let result = []
            // début du chargement
            setLoad(true)

            // crée une réference à la collection 'receipe' de firestore
            const collectionRef = collection(db, "receipe")

            // effectue une requte getDocs pour récupérer l'ensemble des
            // docuements de la collection
            // await =  on ne passe pas à la ligne suivante
            // tant que le résultat n'est pas reçu
            const querySnapshot = await getDocs(collectionRef)
            // on parcourt les résultats
            querySnapshot.forEach((doc) => {
                // à chaque itération on ajoute la data à notre tableau recette
                result.push(doc.data())
            })
            // on modifie notre variable receipes avec le tableau de résultat
            setReceipes(result)
            // fin du chargement
            setLoad(false)
        }
        fetchReceipe()
    }, [])

    return (
        <div className="App">
            {
                // si on charge la donnée
                load === true ? <div>Loading...</div>
                    :
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col"><b>Nom</b></th>
                            <th scope="col"><b>Difficulté</b></th>
                            <th scope="col"><b>Ingrédients</b></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            receipes.map((receipe) => {
                                return (
                                    <Receipe receipe={receipe} key={uuidv4()}/>
                                )
                            })
                        }
                        </tbody>
                    </table>

            }
            <h3>Ajout d'une recette: </h3>
            <div className="form-wrapper">
                <AddRecipeForm/>
            </div>
        </div>
    );
}

export default App
;
