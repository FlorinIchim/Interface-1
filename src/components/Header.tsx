type HeaderProps = {
    charsNumber: number,
    selectedCharIndex: number
}

export const Header = ({charsNumber, selectedCharIndex}:HeaderProps)=>{
    return (
    <>
        <div className="header-container">
            <p className="esc">ESC <span>EXIT</span></p>
            <h2 className="title">CHARACTER SELECTOR</h2>
            <p className="header-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
            <div className="char-text-container">
                <div className="char-text">
                    Characters
                </div>

                <div className="char-count">
                    <p>{selectedCharIndex} <span> / {charsNumber}</span></p>
                </div>
            </div>
    </>
    )
}