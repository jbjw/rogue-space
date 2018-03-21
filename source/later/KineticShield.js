//

"use strict"

class KineticShield extends Component {
	constructor( blueprint ) {
		this.type = "kinetic_shield"
		this.order = 1
		this.maxCharge =
		1/2 m v^2

		super( blueprint )
	}
	get area() {
		return this.height * this.width;
	}
	set sideLength(newLength) {
		this.height = newLength;
		this.width = newLength;
	}
}
