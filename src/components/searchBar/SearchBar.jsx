import { Bar, SearchButton, WholeBar } from './searchBar.style';
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   function enterHandler(event) {
      if(event.key === 'Enter'){
         onSearch(id)
         setId('')
      }
   }

   function changeHandler(event) {
      event.preventDefault();
      let input = event.target.value;
      setId(input);
   }
   
   return (
         <WholeBar>
         <Bar type = 'search' placeholder="Type the ID here..." value={id} onChange={changeHandler} onKeyUp={enterHandler}/>
         <SearchButton onClick = { () => onSearch(id) }>Go</SearchButton>
         </WholeBar>
        
   );
}


