import { Grid } from "@material-ui/core"
import React from "react"
import DateTime from "react-datetime"

export default function CreateTimerView() {

	return (
		<Grid>
			<h3>Create Timer</h3>
			<DateTime />
		</Grid>
	)
}