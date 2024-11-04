type CharacterProps = {
    name: string,
    level: number,
    xp: number,
    image: string,
    active: boolean
    charClicked: ()=>void
    selected: boolean
    createNewChar: ()=>void
}

export const Character = ({name,level,xp,image,active, charClicked, selected, createNewChar}:CharacterProps)=>{
    return (
        active ?
        (<div className={`char-container ${selected ? 'selected':''}`} onClick={charClicked}>
            <img className="char-image" src={image}/>
            <img className="char-shadow" src='/images/gradient.png'/>
            <div className="player-stats-container">
                <div className="player-name">
                    <p>{name}</p>
                </div>
                <div className="circle" style={{'--value': `${xp/16}`, '--percentage': `${xp/16}`} as React.CSSProperties}>
                    <p>{level}</p>
                </div>
            </div>
        </div>) : 
        (<div className="char-container-inactive">
            <img className="char-image-inactive" src={image}/>
            <img className="char-shadow" src='/images/gradient.png'/>
            <div onClick={createNewChar} className="new-char">Create new char</div>
        </div>)
    )
}