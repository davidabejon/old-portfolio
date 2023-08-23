import '../styles/Nav.css'
import logo from '../img/david-abejon-high-resolution-logo-white-on-transparent-background.png'

function Nav() {
    return (
        <>
        <nav id="navbar">
            <img width="300" src={logo} />
                <div className="nav-enlaces">
                    <a href="#" className="nav-enlace">Inicio</a>
                    <a href="#" className="nav-enlace">Sobre mí</a>
                    <a href="#" className="nav-enlace">Proyectos</a>
                    <a href="#" className="nav-enlace">Contacto</a>
                </div>
        </nav>
        <div class="nav-spacing"></div>
        </>
    );
}

export default Nav;