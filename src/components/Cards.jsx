import './main.css'




function Cards(props){
    
    const cards = props.characters.map(card=>
        <div title={card.alt} 
            onClick={()=>props.onClick(card.id)} 
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