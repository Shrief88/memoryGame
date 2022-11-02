import './main.css'




function Cards(props){
    const characters = props.characters;


    const cards = characters.map(card=>
        <div title={card.alt} 
            onClick={props.onClick} 
            className='card' 
            key={card.id} 
            style={{backgroundImage : `url(${card.url})`}}
        >    
        </div>
    )

    return(
        <div className='cards'>
            {cards}
        </div>
    )

}

export default Cards;