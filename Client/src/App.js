import axios from 'axios'
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/navBar';
import About from './components/vistas/About.jsx';
import Detail from './components/vistas/detail/Detail.jsx';
import ErrorPage from './components/vistas/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/vistas/Favorites/Favorites.jsx';

import './App.css';


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const EMAIL = 'diegoalparra08@gmail.com';
   const PASSWORD = 'pass1234';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Credenciales incorrectas")
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   // https://rickandmortyapi.com/api/character/${id}  api RyM
   function searchHandler(id) {
      // const URL_BASE = "https://rickandmortyapi.com/api"
      const URL_BASE = "http://localhost:3001/rickandmorty"

      if(characters.find((char) => char.id === id)) {
         return alert("Character already added!")
      } 

      fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name){
            setCharacters((oldChars) => [...oldChars,data]);
         } else {
            alert("Something went wrong!")
         }
      });

      // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         
      //    const characterFind = characters.find((char) => char.id === Number(id))

      //    if (characterFind) {
      //       alert('Character has been already added to the list!')
      //    }

      //    else if (data.id !== undefined) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    }

      // });
   };

   function closeHandler(id) {
      let deletedCharacter = characters.filter((character) => character.id !== Number(id));
      setCharacters(deletedCharacter);
   }

   return (
      <div className='App'>

         {/* importando el hook useLocation y guardando la const location se verifica si la ubicación actual el
         diferente de / y si lo es renderiza la navbar. */}
         {location.pathname !== '/' && <NavBar onSearch={searchHandler} />}


         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={closeHandler} />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites characters={characters}/>}/>
            <Route path='/about' element={<About />} />
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </div>
   );
}


export default App;
