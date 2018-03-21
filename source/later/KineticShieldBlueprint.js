//

"use strict"

class KineticShieldBlueprint extends ComponentBlueprint {
	constructor( args ) {
		this.type = "kinetic_shield"
		this.

		super( args )
	}
	get area() {
		return this.height * this.width;
	}
	set sideLength(newLength) {
		this.height = newLength;
		this.width = newLength;
	}
}
