import '../styles/Header.css'

function Header() {
    return (
        <section className="heading wrapper">
            <div className="front">
                <div className="line">
                    <p className="word">
                        <span>D</span><span>a</span><span>v</span><span>i</span><span>d</span>
                    </p>
                    <p className="word">
                        <span>A</span><span>b</span><span>e</span><span>j</span><span>ó</span><span>n</span>
                    </p>
                    <p className="word">
                        <span>H</span><span>.</span>
                    </p>
                </div>
                <div className="line">
                    <p className="word">
                        <span>d</span><span>i</span><span>s</span><span>e</span><span>ñ</span><span>o</span>
                    </p>
                    <p className="word">
                        <span>&</span>
                    </p>
                </div>
                <div className="line">
                    <p className="word">
                        <span>d</span><span>e</span><span>s</span><span>a</span><span>r</span><span>r</span><span>o</span><span>l</span><span>l</span><span>o</span>
                    </p>
                    <p className="word">
                        <span>w</span><span>e</span><span>b</span>
                    </p>
                </div>
                <div className="line last-line">
                    <a id="linkedin" href="https://www.linkedin.com/in/david-abej%C3%B3n-heras/" className="word link">
                        <span>l</span><span>i</span><span>n</span><span>k</span><span>e</span><span>d</span><span>i</span><span>n</span>
                    </a>
                    <a id="mail" href="mailto:davidabejonheras@gmail.com" className="word link">
                        <span>m</span><span>a</span><span>i</span><span>l</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Header;