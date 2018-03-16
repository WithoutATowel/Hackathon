import React from 'react';
import caveman1 from '../images/cavemen/caveman1.jpg';
import cavewoman1 from '../images/cavewomen/cavewoman1.jpg';
import cage from '../images/cavemen/cage.jpg';
import cavewoman2 from '../images/cavewomen/cavewoman2.jpg';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Artists = () => {
    return (
            <div className="main artists">
              <Nav />
              <div className='container'>
                  <h1 className='page-header'>Artists</h1>
                  <div className="row artist-profile">
                        <div className="col-md-5 prof-pic-wrapper">
                              <img className="artist-profile-pic" src={caveman1} />
                        </div>
                        <div className="col-md-7">
                              <h3>Sam Caveman</h3>
                              <h4>Age: 25</h4>
                              <h4>From: Estonia</h4>
                              <h4>Specialty: Bodily fluids based paintings.</h4>
                              <p>Bio: As a young caveman, Sam would often anger his parents with his cave drawings. Not
                              so much the actual paintings but that he used his personal bodily fluids for the paintings. But once they
                              dried and the smell went away, they could see the gifts that Sam possessed.</p>
                        </div>
                  </div>
                  <div className="row artist-profile">
                        <div className="col-md-5 prof-pic-wrapper">
                              <img className="artist-profile-pic" src={cavewoman1} />
                        </div>
                        <div className="col-md-7">
                              <h3>Rockelle Welch</h3>
                              <h4>Age: 20</h4>
                              <h4>From: Bedrock</h4>
                              <h4>Specialty: Hunting based drawings.</h4>
                              <p>Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                              software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                  </div>
                  <div className="row artist-profile">
                        <div className="col-md-5 prof-pic-wrapper">
                              <img className="artist-profile-pic" src={cage} />
                        </div>
                        <div className="col-md-7">
                              <h3>Leonardo Di Caveman</h3>
                              <h4>Age: 22</h4>
                              <h4>From: Detroit Rock City</h4>
                              <h4>Specialty: Battle based drawings</h4>
                              <p>Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                              software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                  </div>
                  <div className="row artist-profile">
                        <div className="col-md-5 prof-pic-wrapper">
                              <img className="artist-profile-pic" src={cavewoman2} />
                        </div>
                        <div className="col-md-7">
                              <h3>Frida Kavelo</h3>
                              <h4>Age: 16</h4>
                              <h4>From: Rockingham</h4>
                              <h4>Specialty: Bison</h4>
                              <p>Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                              software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                  </div>
              </div>
              <Footer />
            </div>
    )
}

export default Artists;
