import { Link } from 'react-router-dom';
import './styles.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <div className="container header-container">
            < Link to={"/"}>
                 <h1 className="site-name">MeuSite</h1>
            </Link>
                <nav className='section-nav'>
                    <ul className='nav-menu'>
                        <NavLink to={"/home"} className={({isActive}) => isActive ? "nave-menu menu-active" : "nave-menu"}>
                            <li className='nave-menu'>Início</li>
                        </NavLink>
                        <NavLink to={"/promotion"} className={({isActive}) => isActive ? "nave-menu menu-active" : "nave-menu"}> 
                            <li className='nave-menu'>Promoção</li>
                        </NavLink>
                        <NavLink to={"/scription"} className={({isActive}) => isActive ? "nave-menu menu-active" : "nave-menu"}>
                            <li className='nave-menu'>Participar</li>
                        </NavLink>                  
                    </ul>
                </nav>                 
            </div>
        </header>
    );
}
