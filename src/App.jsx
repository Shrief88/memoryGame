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
  ])

  
  const shuffle = (array) =>{
    let m =16,i,t;
    while(m){
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }


  const handleClick = () =>{
    setCurrentScore(prev => prev+1);
    setCharacters(shuffle(characters));
  }

  

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <Cards onClick={handleClick} characters={characters}/>
    </div>
  )
}

export default App
