import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



const ICONS = {
    apple: require('./icons/apple.png'),
    banana: require('./icons/banana.png'),
    cherry:require('./icons/cherry.png'),
    grape:require('./icons/grape.png'),
    lamon:require('./icons/lamon.png'),
    mellon:require('./icons/mellon.png'),
    orange:require('./icons/orange.png'),
    pear:require('./icons/pear.png'),
    pepper:require('./icons/pepper.png'),
    strawberry:require('./icons/strawberry.png'),
    menu:require('./icons/menu.png')
}


export default ICONS;