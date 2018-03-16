import React from 'react';
import { Link } from 'react-router-dom';

const ArtPiece = (props) => {
    const href = "/item/" + props.piece.id;
    return (
        <div>
            <Link to={href}>
                <h3>"{props.piece.name}" by {props.piece.artist} for {props.piece.price}</h3>
            </Link>
        </div>
    )
}

export default ArtPiece;