import React from 'react';
import AddButton from './AddButton';

export default function ShowProduct({ product }) {
    const PATH = process.env.REACT_APP_PATH;

    return (
        <>
            <img src={product.image} width={250} height={250} />
            <p>
                <b>{product.name}</b><br />
                {product.desc}<br /><br />
                <div className="Product-button"><AddButton id={product.id} /></div>
            </p>
        </>
    );
}