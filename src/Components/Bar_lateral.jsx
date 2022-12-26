import '../Stylus/Bar_lateral.css';

function barLateral(props) {

    return (
        <div className="content">
            
            <aside id="menu">
                <div className="perfil">
                    <img id="imgPerfil" src="./img/60370756.jfif" onClick={props.onClick} alt=""/>
                    <h4>KLEDISOM OLIVEIRA</h4>
                    <nav>
                        <img src="./ico/facebook.png" alt=""/>
                        <img src="./ico/instagram.png" alt="" />
                        <img src="./ico/linkedin.png" alt=""/>
                        <img src="./ico/twitter.png" alt=""/>
                    </nav>
                </div>

                <div className="topicos">
                    <nav>
                        <div className="home">
                            <i className="icono-home"></i>
                            <a id="link-one" href="#primary-page">Home</a>
                        </div>
                        <div className="user">
                            <i className="icono-user"></i>
                            <a id="link-two" href="#second-page">About</a>
                        </div>
                        <div className="resume">
                            <i className="icono-document"></i>
                            <a id="link-tree" href="#third-page">Resumo</a>
                        </div>
                        <div className="portfolio">
                            <i className="icono-book"></i>
                            <a id="link-four" href="#fourth-page">Portfolio</a>
                        </div>
                    </nav>
                </div>
                <footer><h5>Copright KLEDISOM.DEV.BR</h5></footer>
            </aside>


            {/* <button onClick={props.onClick}>aperte</button> */}
        </div>
    ) 
};

export default barLateral;