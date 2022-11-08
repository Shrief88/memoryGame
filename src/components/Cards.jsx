import './main.css'




function Cards(props){
    
    const cards = props.characters.map(card=>
        <div key={card.id} >
            <div title={card.alt} 
            onClick={()=>props.onClick(card.id)} 
            className="bg-cover w-48 h-48"
            style={{backgroundImage : `url(${card.url})`}}
            >    
            </div>
            <div>
                <p className="mt-2 font-semibold">{card.alt}</p>
            </div>

        </div>
        
    )

    return(
        <div className="flex flex-wrap gap-5 justify-center mt-5">
            {cards}
        </div>
    )

}

export default Cards;





// .name{
//     margin-top: 10px;
//     font-weight: 600;
// }