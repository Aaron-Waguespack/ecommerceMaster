import React, { Component } from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx'

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemnProps}) => (
                    <CollectionItem key={id} {...otherItemnProps}/>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;
