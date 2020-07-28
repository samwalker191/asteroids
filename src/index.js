const MovingObject = require('./moving_object');

console.log('webpack is running');

const object1 = new MovingObject({ 
    pos: [300, 300], 
    vel: [10,10],
    radius: 5,
    color: "#00FF00"
});

console.log(object1);