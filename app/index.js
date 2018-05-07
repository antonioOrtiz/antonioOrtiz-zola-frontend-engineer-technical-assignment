import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './scss/app.scss';

function Index() {
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="tweleve columns">
              <div className="preheader">
                <ul>
                  <li>MARCH 30, 2017</li>
                  <li>MEMPHIS</li>
                  <li>#CYNTHIAANDWILLIAM</li>
                </ul>
              </div>
              <header id="main-header">CYNTHIA & WILLIAM</header>
              <div id="couple-image">
                <div id="getting-married">
                  <h1> WE’RE GETTING MARRIED!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="container couple-story-bg">
          <div className="row">
            <div className="one-half column">
              <img className=" palmier1-white" src="../../assets/Palmier1-White.png" alt="palmier1-white" />
              <div className="spacer" />
            </div>
            <div className="one-half column">
              <header className="couple-story-header">HOW WE MET </header>
              <h5>3.05.17</h5>
              <p className="couple-story-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, vitae
                sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, e!citur nec
                enim in, pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non
                ultrices arcu elit sed enim. Suspendisse sit amet nisi quis felis tristique ultrices sed quis est. Nulla
                accumsan tincidunt sollicitudin. Maecenas scelerisque volutpat enim non venenatis. Praesent commodo.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <div className="container couple-story-bg">
          <div className="row">
            <div className="one-half column">
              <img className=" palmier1-white" src="../../assets/Palmier1-White.png" alt="palmier1-white" />
              <div className="spacer" />
            </div>
            <div className="one-half column">
              <header className="couple-story-header">THE PROPOSAL</header>
              <h5>3.05.17</h5>
              <p className="couple-story-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, vitae
                sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, e!citur nec
                enim in, pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non
                ultrices arcu elit sed enim. Suspendisse sit amet nisi quis felis tristique ultrices sed quis est. Nulla
                accumsan tincidunt sollicitudin. Maecenas scelerisque volutpat enim non venenatis. Praesent commodo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

ReactDom.render(<Index />, document.getElementById('app'));
