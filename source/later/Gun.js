//

"use strict"

class Gun extends Weapon {
	constructor( blueprint ) {
		this.componentType = "weapon"
		this.weaponType = "gun"
		
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
