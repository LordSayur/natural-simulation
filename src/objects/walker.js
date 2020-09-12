export default class Walker {
	constructor(positionX, positionY, p5) {
		this.positionX = positionX;
		this.positionY = positionY;
		this.p5 = p5;
	}

	display() {
		this.p5.stroke(0, 0, 0);
		this.p5.point(this.positionX, this.positionY);
	}

	walkV1() {
		let choice = this.p5.floor(this.p5.random(4));

		if (choice === 0) {
			this.positionX++;
		} else if (choice === 1) {
			this.positionX--;
		} else if (choice === 2) {
			this.positionY++;
		} else {
			this.positionY--;
		}
	}

	walkV2() {
		let stepX = this.p5.random(-1, 1);
		let stepY = this.p5.random(-1, 1);
		this.positionX += stepX;
		this.positionY += stepY;
	}
}
