import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import {useState} from "react"


function App() {
   const [characters, setCharacters] = useState([])
   const onSearch = (id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data})=>{
         if(data.id){
            setCharacters([...characters, data])
         }else window.alert("¡No hay personaje con este Id!")
      })
   }
   
   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
