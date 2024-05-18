import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './menu-item.styles.scss';
const MenuItem = ({ title, imageURL, size, history, match, linkUrl}) => (
    <div  className= {`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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



export default withRouter(MenuItem);
