export class Vec {
	x: number;
	y: number;

	constructor(x?: number | Vec, y?: number) {
		if (x instanceof Vec) {
			this.x = x.x;
			this.y = x.y;
		} else if (typeof x === 'number') {
			if (y === undefined) {
				this.x = x;
				this.y = x;
			} else {
				this.x = x;
				this.y = y;
			}
		} else {
            this.x = 0;
            this.y = 0;
        }
	}

	set(x: number | Vec, y?: number): this {
		if (x instanceof Vec) {
			this.x = x.x;
			this.y = x.y;
		} else if (typeof x === 'number') {
			if (y === undefined) {
				this.x = x;
				this.y = x;
			} else {
				this.x = x;
				this.y = y;
			}
		}
		return this;
	}

	add(x: number | Vec, y?: number): this {
		if (x instanceof Vec) {
			this.x += x.x;
			this.y += x.y;
		} else if (typeof x === 'number') {
			if (y === undefined) {
				this.x += x;
				this.y += x;
			} else {
				this.x += x;
				this.y += y;
			}
		}
		return this;
	}

	subtract(x: number | Vec, y?: number): this {
		if (x instanceof Vec) {
			this.x -= x.x;
			this.y -= x.y;
		} else if (typeof x === 'number') {
			if (y === undefined) {
				this.x -= x;
				this.y -= x;
			} else {
				this.x -= x;
				this.y -= y;
			}
		}
		return this;
	}

	multiply(x: number | Vec, y?: number): this {
		if (x instanceof Vec) {
			this.x *= x.x;
			this.y *= x.y;
		} else if (typeof x === 'number') {
			if (y === undefined) {
				this.x *= x;
				this.y *= x;
			} else {
				this.x *= x;
				this.y *= y;
			}
		}
		return this;
	}

	divide(x: number | Vec, y?: number): this {
		if (x instanceof Vec) {
			this.x /= x.x;
			this.y /= x.y;
		} else if (typeof x === 'number') {
			if (y === undefined) {
				this.x /= x;
				this.y /= x;
			} else {
				this.x /= x;
				this.y /= y;
			}
		}
		return this;
	}

	normalize(): this {
		return this.divide(this.magnitude);
	}

	get magnitude(): number {
		return Math.hypot(this.y, this.x);
	}

	get angle(): number {
		return Math.atan2(this.y, this.x);
	}
}

