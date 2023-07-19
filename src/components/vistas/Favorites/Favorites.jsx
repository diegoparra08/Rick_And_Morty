import { connect } from "react-redux"
import Cards from "../../cards/Cards"

function Favorites({myFavorites}) {
    return(
        <div> 
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