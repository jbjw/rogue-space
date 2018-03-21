//

"use strict"

class ElectricGun extends Gun {
	constructor( blueprint ) {
		this.componentType = "weapon"
		this.weaponType = "gun"
		this.projectileMass = 1 // kg
		this.muzzleVelocity = 1000 // m / s

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

var square = new Square(2);
