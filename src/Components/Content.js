import React from 'react';
import ImageOne from '../images/muffins.jpg';
import ImageTwo from '../images/darkpastry.jpg';
import ImageThree from '../images/vanilla.jpg';

const Content = () => {
    return (
        <div>
            <div className="menu-card">
                <img src={ImageOne} alt="pasta" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Muffins</h2>
                    <p className="mb-2">Crispy, delicious and nutritious</p>
                    <span><strong>$16</strong></span>
                </div>
            </div>
            <div className="menu-card">
                <img src={ImageTwo} alt="pasta" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Dark Chocolate Pastry</h2>
                    <p className="mb-2">Crispy, delicious and nutritious</p>
                    <span><strong>$18</strong></span>
                </div>
            </div>
            <div className="menu-card">
                <img src={ImageThree} alt="pasta" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Vanilla Pastry</h2>
                    <p className="mb-2">Crispy, delicious and nutritious</p>
                    <span><strong>$16</strong></span>
                </div>
            </div>
        </div>
    );
};

export default Content;