import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Timer from "../models/Timer"
// @ts-ignore
import request from "@aero/centra"
import { Grid } from "@material-ui/core"
 
interface TimerViewState {
	timer?: Timer
}

interface RouteParams {
	timerId: string
}

interface TimerViewProps extends RouteComponentProps<RouteParams> {
	timerId: string
}

class TimerView extends React.Component<TimerViewProps, TimerViewState> {
	constructor(props: TimerViewProps) {
		super(props)
		this.state = {
			timer: undefined
		}
	}

	onComponentMounted(){
		this.fetchTimer(this.props.match.params.timerId)
	}

	async fetchTimer(timerId: string) {
		const data = await request(new URL(`http://localhost:3000/api/${timerId}`), 'GET').json()
		this.setState({ timer: { timerId: data._id, message: data.message, title: data.title, target: data.target} })
	}

	render() {
		if (!this.state.timer) 
			return (
				<Grid container alignItems={"center"}>
					<h1>Loading...</h1>
				</Grid>
			)
		return (
			<div>
				<p>ID: {this.state.timer?.timerId}</p>
				<p>Title: {this.state.timer?.title}</p>
				<p>Message: {this.state.timer?.message}</p>
				<p>Target: {this.state.timer?.target}</p>
			</div>
		)
	}
}

export default TimerView
