import '../Stylus/Card03.css';

function card03() {

    return (
        <div className='card03'>
            <section id="third-page">
                <header>
                <h1>Skils</h1>
                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                    aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                    quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                    fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                </header>
                <div className="skil-grid">
                <div className="grid-item">
                    <div className="percent">
                    <p>HTML</p>
                    <p>90%</p>
                    </div>
                    <div className="barra-progresso">
                    <div id="bar-html"></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="percent">
                    <p>NODE JS</p>
                    <p>50%</p>
                    </div>
                    <div className="barra-progresso">
                    <div id="bar-node"></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="percent">
                    <p>CSS</p>
                    <p>70%</p>
                    </div>
                    <div className="barra-progresso">
                    <div id="bar-css"></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="percent">
                    <p>BANCO DE DADOS</p>
                    <p>50%</p>
                    </div>
                    <div className="barra-progresso">
                    <div id="bar-bd"></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="percent">
                    <p>JAVASCRIPT</p>
                    <p>80%</p>
                    </div>
                    <div className="barra-progresso">
                    <div id="bar-js"></div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="percent">
                    <p>WORDPRESS/CMS</p>
                    <p>0%</p>
                    </div>
                    <div className="barra-progresso">
                    <div id="bar-wp"></div>
                    </div>
                </div>
                </div>
            </section>         
        </div>
    )
};

export default card03;