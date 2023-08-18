import { HeaderContainer } from "./styles";
import logoIgnite from '../../assets/ignite-logo.png'
import { Timer, Scroll } from  'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img className="logo" src={logoIgnite} alt="triangulo com cor de aurora boreal" />
            <nav>
                <NavLink to='/' title="timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to='/history' title="history">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}