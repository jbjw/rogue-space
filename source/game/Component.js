//

"use strict"

export default class Component {
	constructor( blueprint ) {
		this.type = "component"
		this.integrity = blueprint.integrity
		this.mass = blueprint.mass
	}
}
