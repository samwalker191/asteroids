import Asteroid from './asteroid';
import MovingObject from './moving_object';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    
    
    const object1 = new MovingObject({ 
        pos: [300, 300], 
        vel: [10,10],
        radius: 5,
        color: "#00FF00"
    });
    
    // object1.draw(ctx);
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid
    window.ctx = ctx;
})
