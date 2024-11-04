import { useState } from "react"

type ButtonsProps = {
    deleteChar: ()=>void
}

export const Buttons = ({deleteChar}:ButtonsProps)=>{

    const [hovered,setHovered] = useState(false)

    return (
        <div className="buttons-container">
            <button className="delete-button" onClick={deleteChar}><p>Delete</p></button>
            <button className="check-button" onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}>
                <img src={hovered ? 'images/check-icon-hover.png' : 'images/check-icon.png'}/>
            </button>
        </div>
    )
}