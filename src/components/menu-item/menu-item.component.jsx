import React from 'react';
import './menu-item.styles.scss';
const MenuItem = ({ title, imageURL, size }) => (
    <div  className= {`${size} menu-item`}>
        <div className='backgroundImage'
        style={{
            backgroundImage: `url(${imageURL})`
        }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;