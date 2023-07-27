import { connect } from "react-redux"
import { useDispatch } from "react-redux";

import { orderCards, filterCards, resetFavs } from "../../../Redux/actions";
import Cards from "../../cards/Cards"
import { FavContainer, SelectFilters, MyFavTitle, ResetFilterButton } from "./Favorites.style";


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
        <FavContainer> 

        <SelectFilters placeholder="Gender" onChange={handleFilter}>
        {["Male", "Female", "unknown", "Genderless"].map(gender => <option value={gender}>{gender}</option>)}
        </SelectFilters>

        <SelectFilters placeholder="Order" onChange={handleOrder}>
        {["Ascendente", "Descendente"].map(orden => <option value={orden}>{orden}</option>)}
        </SelectFilters>

        <ResetFilterButton onClick={handleReset}>Reset Filters</ResetFilterButton>

            <MyFavTitle>My Favorites</MyFavTitle>
            <div> 
            <Cards characters={myFavorites}/>
            </div>
        
        </FavContainer>
    );    
}

const mapStateToProps = (state) => {
    return {
     myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)

