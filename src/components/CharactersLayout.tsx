import { useState } from "react"
import { chars } from "../utils/characters"
import { Character } from "./Character"
import { Header } from './Header'
import { CharacterType } from "../utils/types"
import { CharacterStats } from "./CharacterStats"
import { Buttons } from "./Buttons"

export const CharactersLayout = ()=>{

    const [charsArray,setCharsArray] = useState<CharacterType[]>(chars)
    const [selectedChar, setSelectedChar] = useState(-1)
    const [selectedCharObject,setSelectedCharObject] = useState({} as CharacterType)

    const selectChar = (index:number) => {
        setSelectedChar(index)
        setSelectedCharObject(charsArray[index])
    }

    const createNewChar = (index: number) => {
        setCharsArray(prevCharsArray => {
            const updatedArray = prevCharsArray.map((char, i) => {
                if (i === index) {
                    return { ...char, active: true};
                }
                return char;
            });
            updatedArray.sort((a, b) => Number(b.active) - Number(a.active));

        return updatedArray;
        });
    };

    const deleteChar = (index: number) => {
        setCharsArray(prevCharsArray => {
            const updatedArray = prevCharsArray.map((char, i) => {
                if (i === index) {
                    return { name : char.name, 
                        level: 1, 
                        xp : 0,
                        cash: 10000,
                        bank: 50000,
                        lastPlay: 0,
                        image: char.image,
                        active: false};
                }
                return char;
            });
            updatedArray.sort((a, b) => Number(b.active) - Number(a.active));

        return updatedArray;
        });
        setSelectedChar(-1)
    };

    const charsElements = charsArray.map((char,index)=>{
        return <Character 
            key={index} 
            name={char.name} 
            level={char.level} 
            xp = {char.xp} 
            image={char.image} 
            active={char.active} 
            charClicked={()=>selectChar(index)} selected={selectedChar===index}
            createNewChar={()=>createNewChar(index)}/>
    })

    return (
        <>
        <Header charsNumber={charsArray.length} selectedCharIndex={selectedChar+1}/>
        <div className="characters">
            {charsElements}
        </div>
        {selectedChar!==-1 && 
            <>
                <CharacterStats {...selectedCharObject}/>
                <Buttons deleteChar={()=>deleteChar(selectedChar)}/>
            </>}
        </>
    )
}