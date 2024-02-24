import './header.scss';
import logo from '../../assets/LOGO.png'

export function Header() {
    return (
    <div className="header">
        <div className='logo'>
            <a href="/"><img src={logo} alt="Logo du site" /></a>
        </div>
        <nav>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">A propos</a></li>
            </ul>
        </nav>
    </div>
    )
}