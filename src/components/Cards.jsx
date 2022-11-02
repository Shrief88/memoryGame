import './main.css'




function Cards(props){
    
    const cards = props.characters.map(card=>
        <div key={card.id} >
            <div title={card.alt} 
            onClick={()=>props.onClick(card.id)} 
            className='card' 
            style={{backgroundImage : `url(${card.url})`}}
            >    
            </div>
            <div>
                <p className='name'>{card.alt}</p>
            </div>

        </div>
        
    )

    return(
        <div className='cards'>
            {cards}
        </div>
    )

}

export default Cards;