import React from 'react';
import caveman1 from '../images/cavemen/caveman1.jpg';
import cavewoman1 from '../images/cavewomen/cavewoman1.jpg';
import caveman2 from '../images/cavemen/caveman2.jpg';
import cavewoman2 from '../images/cavewomen/cavewoman2.jpg';


const Artists = () => {
    return (
        <div className='container'>
            <h1>Featured Artists</h1>
            <div class="row">
            <div class="col xs">
            <h3>Sam Caveman</h3>
            <img class="img" src={caveman1} />
            <h4>Age: 25</h4>
            <h4>From: Estonia</h4>
            <h4>Specialty: Bodily fluids based paintings.</h4>
            </div>
            <div class="col xs"><p>
            Bio: As a young caveman, Sam would often anger his parents with his cave drawings. Not
            so much the actual paintings but that he used his personal bodily fluids for the paintings. But once they
            dried and the smell went away, they could see the gifts that Sam possessed.
            </p>
            </div>
            </div>
            <div class="row">
            <div class="col xs">
            <h3>Rockelle Welch</h3>
            <img class="img" src={cavewoman1} />
            <h4>Age: 20</h4>
            <h4>From: Bedrock</h4>
            <h4>Specialty: Hunting based drawings.</h4>
            </div>
            <div class="col xs"><p>
            Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            </div>
            </div>
            <div class="row">
            <div class="col xs">
            <h3>Leonardo Di Caveman</h3>
            <img class="img" src={caveman2} />
            <h4>Age: 22</h4>
            <h4>From: Detroit Rock City</h4>
            <h4>Specialty: Battle based drawings</h4>
            </div>
            <div class="col xs"><p>
            Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            </div>
            </div>
            <div class="row">
            <div class="col xs">
            <h3>Frida Kavelo</h3>
            <img class="img" src={cavewoman2} />
            <h4>Age: 16</h4>
            <h4>From: Rockingham</h4>
            <h4>Specialty: Bison</h4>
            </div>
            <div class="col xs"><p>
            Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            </div>
            </div>
        </div>
    )
}

export default Artists;
