import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import { HomeButton, NavContainer, Logo, LogoWord, AboutButton } from './navBar.style'
import logoRick from '../../Images/logo_R_M.jpg'
import logoLetra from '../../Images/logoLetra.png'


export default function NavBar({ onSearch }) {
    return (
        <NavContainer>
            <Logo src={logoRick} alt='Logo Rick and Morty' />
            <LogoWord src={logoLetra} alt='Logo Rick and Morty words' />

            <SearchBar onSearch={onSearch} />

            <Link to='/home'>
                <HomeButton>Home</HomeButton>
            </Link>

            <Link to='/about'>
                <AboutButton>About</AboutButton>
            </Link>
        </NavContainer>
    )
}