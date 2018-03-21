//

"use strict"

class EnergyShield extends Component {
	constructor(sideLength) {
		super(sideLength, sideLength);
	}
	get area() {
		return this.height * this.width;
	}
	set sideLength(newLength) {
		this.height = newLength;
		this.width = newLength;
	}
}
