import { connect } from "react-redux"
import { useDispatch } from "react-redux";

import { orderCards, filterCards, resetFavs } from "../../../Redux/actions";
import Cards from "../../cards/Cards"



function Favorites({myFavorites}) {

    const dispatch = useDispatch();

function handleOrder(event){
    
    dispatch(orderCards(event.target.value))
}

function handleFilter(event){
    dispatch(filterCards(event.target.value))
}

function handleReset(){
    dispatch(resetFavs())
}


    return(
        <div> 

        <select placeholder="Gender" onChange={handleFilter}>
        {["Male", "Female", "unknown", "Genderless"].map(gender => <option value={gender}>{gender}</option>)}
        </select>

        <select placeholder="Order" onChange={handleOrder}>
        {["Ascendente", "Descendente"].map(orden => <option value={orden}>{orden}</option>)}
        </select>

        <button onClick={handleReset}>Reset Filters</button>

            <h2>My Favorites</h2>
        <Cards characters={myFavorites}/>
        </div>
    );    
}

const mapStateToProps = (state) => {
    return {
     myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)