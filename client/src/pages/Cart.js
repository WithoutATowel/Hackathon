import React, { Component } from 'react';
import ArtPiece from '../components/ArtPiece';

class Cart extends Component {
    render () {
        const art = this.props.cartArt.map((piece) =>{
            return (
                <ArtPiece piece={piece} />
            )
        });

        return(
        <div className='container'>
            <h1>Cart</h1>
            {art}
        </div>
        )
    }
}

export default Cart;

