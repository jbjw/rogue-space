//

"use strict"

export default class Ship( args ) {
	args.blueprint
	args.name
	args.shield
	args.guns

	this.components = []
	constructor() {

	}

}

Ship.prototype = {
	addVertex: function(v) {
		this.vertices.push(v);
	}

}

Ship.prototype.
