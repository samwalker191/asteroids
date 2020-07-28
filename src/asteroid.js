import MovingObject from './moving_object';
import Util from './util';


class Asteroid extends MovingObject {
    constructor(options) {
        options.color = 'gray';
        options.vel = Util.randomVec(3);
        options.radius = 10;
        super(options);
    }
}


export default Asteroid;