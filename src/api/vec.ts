export class Vec {
	x: number;
	y: number;

	constructor(x: number | Vec, y?: number) {
		if (x instanceof Vec) {
			this.x = x.x;
			this.y = x.y;
		} else if (typeof x === 'number') {
			if (y !== undefined) {
				this.x = x;
				this.y = x;
			} else {
				this.x = x;
				this.y = y;
			}
		}
	}

	set(x: number | Vec, y?: number) {
		if (x instanceof Vec) {
			this.x = x.x;
			this.y = x.y;
		} else if (typeof x === 'number') {
			if (y !== undefined) {
				this.x = x;
				this.y = x;
			} else {
				this.x = x;
				this.y = y;
			}
		}
	}

	add() {

	}

	subtract() {

	}

	multiply() {

	}

	divide() {

	}

	normalize() {

	}

	get magnitude(): number {
		return Math.hypot(this.y, this.x);
	}

	get angle(): number {
		return Math.atan2(this.y, this.x);
	}
}

