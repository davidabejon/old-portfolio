import '../styles/MainContent.css'
import fotoCarnet from '../img/david.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'

function MainContent() {
    return (
        <main class="main-content text-center">

            <section class="sobre-mi gap3">
                <div class="tarjeta">
                    <h2 class="tarjeta-heading">Sobre mi</h2>
                    <hr class="tarjeta-separator" />
                    <div class="tarjeta-content">
                        <p class="tarjeta-text">
                            Estudiante de segundo año de Ingeniería Informática en la Universidad de Alcalá de Henares. Conocimientos de Java, Python y PostgreSQL. Tengo un nivel de inglés C2 certificado por la Escuela Oficial de Idiomas. He hecho un par de proyectos personales con HTML, CSS y JavaScript, subido en GitHub.
                        </p>
                        <img class="tarjeta-img" id="foto-david" src={fotoCarnet} alt="David Abejón" />
                    </div>
                </div>
                <div class="tarjeta Tecnologías">
                    <h2 class="tecnologias-titulo" style={{marginBottom: "5rem"}}>Tecnologías que uso</h2>
                    <div class="iconos">
                        <img src="https://i.imgur.com/EkvYFHV.png" alt="" class="icono" />
                        <img src="https://i.imgur.com/KJy8mn1.png" alt="" class="icono" />
                        <img src="https://i.imgur.com/JWR9x0T.png" alt="" class="icono" />
                        <img src="https://i.imgur.com/GYOUdml.png" alt="" class="icono" />
                        <img src="https://i.imgur.com/3vrOgaH.png" alt="" class="icono" />
                        <img src="https://i.imgur.com/DTSCQq0.png" alt="" class="icono" />
                        <img src="https://i.imgur.com/fDW3T2D.png" alt="" class="icono" />
                        <img src="https://i.imgur.com/GSahw3R.png" alt="" class="icono" />
                    </div>
                </div>
            </section>

            <section class="proyectos">
                <div class="tarjeta">
                    <h2 class="tarjeta-heading" style={{marginBottom: "40px"}}>Proyectos</h2>
                    <hr class="tarjeta-separator tarjeta-separator--proyectos" />
                    <div class="tarjeta-content tarjeta-proyectos">

                        <AwesomeSlider className='slider' animation='scaleOutAnimation' infinite={true}>
                            <div className='proyecto markdown'>
                                <a href="https://codepen.io/davidabejon/full/jOvKOKd" target="_blank">
                                    <h3>Markdown Previewer</h3>
                                </a>
                            </div>
                            <div className='proyecto quote'>
                                <a href="https://codepen.io/davidabejon/full/eYLrjOX" target="_blank">
                                    <h3>Quote Generator</h3>
                                </a>
                            </div>
                            <div className='proyecto galeria'>
                                <a href="https://davidabejon.github.io/image-gallery/" target="_blank">
                                    <h3>Galería de imágenes</h3>
                                </a>
                            </div>
                            <div className='proyecto frontend'>
                                <a href="https://davidabejon.github.io/FrontEnd-Store/" target="_blank">
                                    <h3>Front-End Store</h3>
                                </a>
                            </div>
                            <div className='proyecto cafe'>
                                <a href="https://davidabejon.github.io/BlogDeCafe/" target="_blank">
                                    <h3>BlogDeCafé</h3>
                                </a>
                            </div>
                        </AwesomeSlider>


                    </div>
                </div>
            </section>


        </main>
    );
}

export default MainContent;