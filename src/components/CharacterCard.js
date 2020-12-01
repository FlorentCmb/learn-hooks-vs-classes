// Librairies
import { useState, useEffect } from 'react'
// Style
import './CharacterCard.css'
// Image
import firstCharacter from '../assets/tilesetUsed.png'

const CharacterCard = () => {

    // State
    const [characterData, setCharacterData] = useState({
        name: "Fire Sorcerer",
        img: firstCharacter,
        level: 1
    })

    // This useEffect will acts exactly like componentDidMount
    useEffect(() => {
        console.log("Your character has arrived and is ready to fight !")
    }, [])

    // This useEffect will acts like a componentWillUpdate, and it will play its function whenever characterData is changed
    useEffect(() => {
        console.log("Your character has successfully leveled up !")
    }, [characterData])

    // Level up function (we could add a luck factor here)
    const levelUp = () => {
        // This setCharacterData is kinda strange because here we just want to change the level value, which is not all of the state.
        // In order to achieve that, we have to give to the func an object in which we increment the character's level, but all the other variables (name, img) remains unchanged
        setCharacterData({
            // Here we increment the level by adding 1 to the previous character level value.
            level: characterData.level ++,
            // Here we say to the function that we want to keep all the other variables from the character without changing 'em.
            ...characterData
        })
    }

    // The render method
    return (
        <div className="CharacterCard">
            <img className="CharacterCard-Img" src={characterData.img} alt={characterData.name} />
            <p className="CharacterCard-Text">{characterData.name} level {characterData.level}</p>

            <input className="CharacterCard-Button" type="button" value="Level Up !" onClick={levelUp} />
        </div>
    )
}

export default CharacterCard