import React from 'react';
import './homepage.styles.scss';
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <h1 className='title'>Air Conditioners</h1>
                <span className='subtitle'>Order Now</span>
            </div>

            <div className='menu-item'>
                <h1 className='title'>Refrigerators</h1>
                <span className='subtitle'>Order Now</span>
            </div>

            <div className='menu-item'>
                <h1 className='title'>Television Sets</h1>
                <span className='subtitle'>Order Now</span>
            </div>

            <div className='menu-item'>
                <h1 className='title'>Electric GUitar</h1>
                <span className='subtitle'>Order Now</span>
            </div>
        </div>
    </div>
);

export default HomePage;

