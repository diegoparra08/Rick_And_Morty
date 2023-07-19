import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/navBar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/vistas/About';
import Detail from './components/vistas/detail/Detail';
import ErrorPage from './components/vistas/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/vistas/Favorites/Favorites';


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

   function searchHandler(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         const characterFind = characters.find((char) => char.id === Number(id))

         if (characterFind) {
            alert('Character has been already added to the list!')
         }

         else if (data.id !== undefined) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      });
   }

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
