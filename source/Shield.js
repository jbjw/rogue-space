//

"use strict"

class Shield extends Component {
	constructor( blueprint ) {
		this.componentType = "shield"
		this.order = 1
		this.chargeMax = 10000 // joules blueprint.maxCharge
		this.chargeRate = 100 // joules / s blueprint.chargeRate
		this.charge = 0 // or can start charged maybe

		super( blueprint )
	}
	update( dt ) {
		this.charge = Math.min( this.charge + this.chargeRate, this.chargeMax )
	}
}
