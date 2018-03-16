import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Item = (props) => {
    let index = props.index;
    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-5'>
                    <h1>This is placeholder content asdfasdfasdf</h1>   
                </div>
                <div className='col-md-7'>
                    <h1>{props.allArt[index].name}</h1>
                    <h3>by {props.allArt[index].artist}</h3>
                    <h2>Price: {props.allArt[index].price}</h2>
                    <button className='btn btn-primary' onClick={ (e) => { props.onAddToCart(e, index) } }>Add to Cart</button>
                </div>
            </div>
            <div className="row">
                <div className='col-md-5'>
                    <h4>Description</h4>
                    <p>Duis cursus nec libero in efficitur. Nunc mauris lacus, lobortis ac quam sed, commodo cursus odio. Morbi consequat a est id viverra. Nunc mattis mauris quis felis feugiat varius. Nam nec neque a erat convallis pretium eu eu urna. In hac habitasse platea dictumst. Pellentesque metus dui, iaculis ac efficitur eu, fringilla at nisl. Nulla facilisi. Praesent nec eros id diam accumsan varius.</p>
                </div>
                <div className='col-md-7'>
                    <h4>About the artist</h4>
                    <p>Duis cursus nec libero in efficitur. Nunc mauris lacus, lobortis ac quam sed, commodo cursus odio. Morbi consequat a est id viverra. Nunc mattis mauris quis felis feugiat varius. Nam nec neque a erat convallis pretium eu eu urna. In hac habitasse platea dictumst. Pellentesque metus dui, iaculis ac efficitur eu, fringilla at nisl. Nulla facilisi. Praesent nec eros id diam accumsan varius.</p>
                </div>
            </div>
        </div>
    )
}

export default Item