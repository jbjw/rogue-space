//

"use strict"

import Component from "./Component"

export default class Weapon extends Component {
	constructor( blueprint ) {
		super( blueprint )
		this.componentType = "weapon"
	}
}
