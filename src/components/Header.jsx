import './main.css'

function Header(props){
    return(
        <div className="header">
            <h1>Memory Game</h1>
            <div className="score">
                <p>Current Score: {props.currentScore}</p>
                <p>Best Score: {props.bestScore}</p>
            </div>
        </div>   
    )
}

export default Header;