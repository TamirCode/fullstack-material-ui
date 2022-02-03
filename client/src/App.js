import List from "./comp/List"
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useState } from "react"

export default function App() {
	const [update, setUpdate] = useState(false)
	const [checked, setChecked] = useState(false)

	const handleChange = (event) => {
		setChecked(event.target.checked)
		setUpdate(!update)
	  };

	return (
		<>
			<FormGroup className="margin">
				<FormControlLabel 
					control={<Checkbox checked={checked} onChange={handleChange} />} 
					label="Show only active servers"
				/>
			</FormGroup>
			<List update={update} setUpdate={setUpdate} checked={checked} />
		</>
	)
}