import '../Stylus/Card01.css';

function card01(props) {

    return (
        <div className='card01'>
                <div className="container">
                    <section id="primary-page">
                    <div className="title-main">
                    <div id="ico-menu" onClick={props.onClick}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <h1>Kledisom Oliveira</h1>
                    <div className="hello cursor">
                        <h3>Front-end developer.</h3>
                    </div>
                    </div>              
                  </section>
                </div>
        </div>
    )
};

export default card01;