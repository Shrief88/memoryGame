import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards';
import gaara from './images/gaara.jpg'
import hidan from './images/hidan.jpg'
import hinata from './images/hinata.jpg'
import itachi from './images/itachi.jpg'
import jiraiya from './images/jiraiya.jpg'
import kakashi from './images/kakashi.jpg'
import madara from './images/madara.jpg'
import minato from './images/minato.png'
import nagato from './images/nagato.jpg'
import naruto from './images/naruto.jpg'
import neji from './images/neji.jpg'
import obito from './images/obito.jpg'
import pain from './images/pain.jpg'
import sakura from './images/sakura.jpg'
import sasuke from './images/sasuke.jpg'
import tobirama from './images/tobirama.jpg'
import tsunade from './images/Tsunade.jpg'
import temari from "./images/Temari.jpeg"
import shikamaru from "./images/Shikamaru.jpg"
import kurenai from "./images/Kurenai.webp"


function App() {
  const [currentScore,setCurrentScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  const [characters,setCharacters] = useState([
    {url:gaara,alt: "Gaara",id:1,hasBeenHit:false},
    {url:hidan,alt: "Hidan",id:2,hasBeenHit:false},
    {url:itachi,alt: "Itachi",id:3,hasBeenHit:false},
    {url:hinata,alt: "Hinata",id:4,hasBeenHit:false},
    {url:jiraiya,alt: "Jiraiya",id:5,hasBeenHit:false},
    {url:kakashi,alt: "Kakashi",id:6,hasBeenHit:false},
    {url:madara,alt: "Madara",id:7,hasBeenHit:false},
    {url:minato,alt: "Minato",id:8,hasBeenHit:false},
    {url:nagato,alt: "Nagato",id:9,hasBeenHit:false},
    {url:naruto,alt: "Naruto",id:10,hasBeenHit:false},
    {url:neji,alt: "Neji",id:11,hasBeenHit:false},
    {url:pain,alt: "Pain",id:12,hasBeenHit:false},
    {url:obito,alt: "Obito",id:13,hasBeenHit:false},
    {url:sakura,alt: "Sakura",id:14,hasBeenHit:false},
    {url:sasuke,alt: "Sasuke",id:15,hasBeenHit:false},
    {url:tobirama,alt: "Tobirama",id:16,hasBeenHit:false},
    {url:tsunade,alt: "tsunade",id:17,hasBeenHit:false},   
    {url:temari,alt: "temari",id:18,hasBeenHit:false},
    {url:shikamaru,alt: "shikamaru",id:19,hasBeenHit:false},
    {url:kurenai,alt: "kurenai",id:20,hasBeenHit:false},
  ])

  
  const shuffle = (array) =>{
    let m =array.length,i,t;
    while(m){
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }




  const handleClick = (id) =>{
    const clickedCard = characters.filter(character=>character.id === id);

    if(!clickedCard[0].hasBeenHit){
      setCurrentScore(prev => prev+1); 
      setCharacters(prevArray=>prevArray.map(item=>item.id === id ? {...item,hasBeenHit:true}:item));
    }else{
      setBestScore(prev=> prev<currentScore ? currentScore:prev);
      setCurrentScore(0);
      setCharacters(prevArray=>prevArray.map(item=>{
        return {...item,hasBeenHit:false}
      }));
    }
    
    setCharacters(prevArray=>shuffle(prevArray))
  }

  

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      {currentScore === characters.length && <h3 className='pt-3'>conguratulations! You Win</h3>}
      <Cards onClick={handleClick} characters={characters}/>
    </div>
  )
}

export default App
