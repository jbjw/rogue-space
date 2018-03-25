//

"use strict"

import Log from "./ui/Log.js"

import Game from "./game/Game.js"
import Ship from "./game/Ship.js"

import React from "react"
import ReactDOM from "react-dom"

import "./index.css"

const game = new Game()

const ship1 = new Ship()

class Root extends React.Component {
	constructor( props ) {
		super( props )
		// const arr = [ 1, 2, 3, 4 ]
		// const x = 4, y = 4
		// this.state
	}
	render() {
		// const els = []
		// for ( let i = 0; i < 4; i++ ) {
		// 	els.push( <Tray key={ i }></Tray> )
		// }
		// const els = new Array( 6 ).map( () => <Tray key={}></Tray> )
		return ( <div id={ "inner-root" }>
			<div className="row row-top">
				<Pane position="top"></Pane>
			</div>
			<div className="row row-middle">
				<Pane position="left"></Pane>
				<Pane position="right"></Pane>
			</div>
			<div className="row row-bottom">
				<Pane position="bottom"></Pane>
			</div>
		</div> )
		// return (
		// 	<div id={ "inner-root" }>
		// 		<Pane position="top"></Pane>
		// 		<Pane position="left"></Pane>
		// 		<Pane position="right"></Pane>
		// 		<Pane position="bottom"></Pane>
		// 	</div>
		// )
	}
}

class Pane extends React.Component {
	constructor( props ) {
		super( props )
		// props.position
	}
	render() {
		const className = "pane " + "pane-" + this.props.position
		return <div className={ className }></div>
	}
}

class BottomPane extends Pane {
	constructor( props ) {
		super( props )
		// this.props.position
	}
	render() {
		return <div className="pane pane-bottom"></div>
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById( "root" )
)
