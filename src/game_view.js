import Game from './game';

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game();
    }

    step() {
        this.game.moveObjects();
        this.game.draw(this.ctx);
    }

    start() {
        setInterval(this.step.bind(this), 20);
    }
}

export default GameView;