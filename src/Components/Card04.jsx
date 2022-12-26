import React from 'react';
import '../Stylus/Card04.css';

function card04() {

    return (
        <div className="card04">
            <section id="fourth-page">
        <header>
          <h1>Portfolio</h1>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </header>
        <div className="port-grid">
          <div className="port-item">
            <div className="port-img">
              <img src="./img/template.PNG" alt="" width="100%" height="200" />
            </div>
            <h3>TEMPLATE 01</h3>
          </div>
          <div className="port-item">
            <div className="port-img">
              <img
                src="./img/template02.PNG"
                alt=""
                width="100%"
                height="200"
              />
            </div>
            <h3>TEMPLATE 02</h3>
          </div>
          <div className="port-item">
            <div className="port-img">
              <img src="./img/palpitex.PNG" alt="" width="100%" height="200" />
            </div>
            <h3>TEMPLATE 03</h3>
          </div>
          <div className="port-item">
            <div className="port-img">
              <img
                src="./img/form-example.PNG"
                alt=""
                width="100%"
                height="200"
              />
            </div>
            <h3>TEMPLATE 04</h3>
          </div>
          <div className="port-item">
            <div className="port-img">
              <img src="./img/cep.PNG" alt="" width="100%" height="200" />
            </div>
            <h3>TEMPLATE 05</h3>
          </div>
          <div className="port-item">
            <div className="port-img">
              <img src="./img/rpm.PNG" alt="" width="100%" height="200" />
            </div>
            <h3>TEMPLATE 06</h3>
          </div>
        </div>
      </section>
        </div>
    )
};

export default card04;