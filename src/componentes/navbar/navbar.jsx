import './navbar.css'

export function Navbar({ cuenta }) {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="./">Inicio</a></li>
                <li><a href="./">Contacto</a></li>
                <li><a href="./">Cuenta: {cuenta}</a></li>
            </ul>
        </nav>
    )
}