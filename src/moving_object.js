class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
    }

    move() {
        let newX = this.pos[0] + this.vel[0];
        let newY = this.pos[1] + this.vel[1];

        this.pos = [newX, newY];
        this.wrap();
    }

    draw(ctx) {
        ctx.fillStyle = this.color; // sets color to be filled inside of the path
        //creating a circle with path
        ctx.beginPath(); // necessary to begin drawing this path
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill(); // fills the interior of the circle (does not work without fillStyle being set)
    }

    wrap() {
        if (this.pos[0] > 800) {
            this.pos[0] = 0;
        } else if (this.pos[0] < 0) {
            this.pos[0] = 800;
        }

        if (this.pos[1] > 500) {
            this.pos[1] = 0;
        } else if (this.pos[1] < 0) {
            this.pos[1] = 500;
        }
    }
}

export default MovingObject;