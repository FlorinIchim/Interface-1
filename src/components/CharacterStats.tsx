import { CharacterType } from "../utils/types"

export const CharacterStats = ({name,level,xp,cash,bank,lastPlay} : CharacterType)=>{
    return (
        <div className="stats-container">
            <div className="avatar-container">
                <img src='/images/avatar-icon.png'/>
                <p>{name}</p>
            </div>

            <div className="xp-container">
                <img src='/images/xp-icon.png'/>
                <p>{level} LVL <span>{xp} <span>/ 1599</span></span></p>
            </div>

            <div className="cash-container">
                <img src='/images/cash-icon.png'/>
                <p>$<span>{cash}</span></p>
            </div>

            <div className="bank-container">
                <img src='/images/bank-icon.png'/>
                <p>$<span>{bank}</span></p>
            </div>

            <div className="warning-container">
                <img src='/images/warning-icon.png'/>
                <p>Blocked: <span className="red-text">32 days</span>. <span className="grey-text">Issued by Oliver White</span></p>
            </div>

            <div className="last-play-container">
                <img src='/images/avatar-icon.png'/>
                <p>Last play: <span>{lastPlay} days ago</span></p>
            </div>
        </div>
    )
}