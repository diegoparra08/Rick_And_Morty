import axios from 'axios'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/navBar';
import About from './components/vistas/About.jsx';
import Detail from './components/vistas/detail/Detail.jsx';
import ErrorPage from './components/vistas/Error/Error.jsx';
import Favorites from './components/vistas/Favorites/Favorites.jsx';

import './App.css';


function App() {
 
   const [characters, setCharacters] = useState([]);


   async function searchHandler(id) {
      const URL_BASE = "https://rymsrver.onrender.com/rickandmorty";

    
      // Buscar el personaje en la lista local antes de hacer la llamada a la API
      const existingCharacter = characters.find((char) => char.id === id);
      if (existingCharacter) {
         setCharacters((oldChars) => [...oldChars, existingCharacter]);
         return; // Salir de la función si el personaje ya está en la lista
      }

      try {
         const { data } = await axios(`${URL_BASE}/character/${id}`)

         const characterFind = characters.find((char) => char.id === Number(id))

         if (characterFind) {
            alert('Character has been already added to the list!')
         }

         else if (data.id !== undefined) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         console.log('error');
         alert("Something went wrong!");
      }

   };

   function closeHandler(id) {
      let deletedCharacter = characters.filter((character) => character.id !== Number(id));
      setCharacters(deletedCharacter);
   }

   return (
      <div className='App'>

         {/* importando el hook useLocation y guardando la const location se verifica si la ubicación actual el
         diferente de / y si lo es renderiza la navbar. */}
         <NavBar onSearch={searchHandler} />


         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={closeHandler} />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites characters={characters} />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </div>
   );
}


export default App;
