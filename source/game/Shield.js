//

"use strict"

import Component from "./Component"

export default class Shield extends Component {
	constructor( blueprint ) {
		super( blueprint )
		this.componentType = "shield"
		this.order = 1
		this.chargeMax = 10000 // joules blueprint.maxCharge
		this.chargeRate = 100 // joules / s blueprint.chargeRate
		this.charge = 0 // or can start charged maybe
	}
	update( dt = 0.01 ) {
		this.charge = Math.min( this.charge + this.chargeRate, this.chargeMax )
	}
}
