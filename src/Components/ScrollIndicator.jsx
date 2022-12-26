import React from 'react';

function scrollIndicator() {
    const myStyle = {
        display: 'block',
        backgroundColor: 'red',
        height: '.35rem',
        width: '0',
    };

  /*   window.addEventListener('scroll', () => {
        const indicator = document.querySelector('#indicator');
        const maxHeight = document.body.scrollHeight - window.innerHeight;

        const percentage = (window.scrollY / maxHeight) * 100;

        indicator.style.width = `${percentage}%`;
    }); */

 return (
    <div className="indicator">
        <div id='indicator' style={myStyle}></div>
    </div>
 )
};

export default scrollIndicator;