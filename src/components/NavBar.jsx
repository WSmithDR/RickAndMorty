import SearchBar from "./SearchBar"
import {NavLink} from "react-router-dom"
const NavBar = ({onSearch}) => {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
            <button><NavLink to="/home">Home</NavLink></button>
            <button><NavLink to="/about">About</NavLink></button>
            <button><NavLink to="/favorites">Favorites</NavLink></button>
        </div>
    )
}

export default NavBar