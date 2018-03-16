import React, {Component} from 'react';
import Carousel from '../components/Carousel';
import caveman1 from '../images/cavemen/caveman1.jpg';
const axios = require('axios');


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shakespeare: ''
        }
    }

    render() {
        return (
            <div className='carousel container'>
                <h1>Prehistoric Art Gallery</h1>
                <Carousel />
                <hr />
                <div id='featured-artist'>
                    <h1>Featured Artist: Sam Caveman</h1>
                    <img id="homepic" src={caveman1} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor dolor quis ex egestas, vel porta nisi suscipit. Suspendisse eget condimentum odio. Proin ac pharetra eros. Pellentesque laoreet vehicula egestas. Vestibulum aliquet sem vitae purus tempus sagittis. Nullam laoreet lacinia nisl id auctor. Suspendisse sollicitudin pharetra facilisis. Mauris eros orci, ultricies sed risus vel, condimentum hendrerit est.</p>
                    <p>Donec molestie ac augue non molestie. In fermentum leo et leo pulvinar, sollicitudin varius enim fringilla. Donec posuere, nunc ac convallis posuere, nunc ipsum egestas sapien, ac tempor nisl ante eget lacus. Maecenas quis lectus eget nulla cursus semper in sed mi. Sed posuere vehicula sapien sit amet scelerisque. Donec nec velit ex. Ut ex nisl, cursus at felis quis, blandit elementum leo. Nunc imperdiet lacus sit amet velit faucibus, ac semper metus hendrerit.</p>
                </div>
            </div>
        )
    }
}

export default Home;
