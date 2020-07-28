import Asteroid from './asteroid';

class Game {
    constructor() {
        this.asteroids = this.addAsteroids();
    }

    addAsteroids() {
        let asteroids = [];
        while (asteroids.length < Game.NUM_ASTEROIDS) {
            asteroids.push(new Asteroid({ pos: this.randomPos() }));
        }
        return asteroids;
    }

    randomPos() {
        let randomX = Game.DIM_X * Math.random();
        let randomY = Game.DIM_Y * Math.random();
        return [randomX, randomY];
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.asteroids.forEach((ast) => {
            ast.draw(ctx);
        })
    }

    moveObjects() {
        this.asteroids.forEach((ast) => {
            ast.move();
        })
    }
}

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

export default Game;