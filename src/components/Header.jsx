import './main.css'

function Header(props){
    return(
        <div className="tex">
            <h1 className="text-5xl font-bold">Memory Game</h1>
            <div className="flex justify-center mt-5 gap-20">
                <p>Current Score: {props.currentScore}</p>
                <p>Best Score: {props.bestScore}</p>
            </div>
        </div>   
    )
}

export default Header;



