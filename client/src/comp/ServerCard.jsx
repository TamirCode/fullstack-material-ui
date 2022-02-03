import Switch from '@mui/material/Switch'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function ServerCard({ server, setUpdate }) {

	const [checked, setChecked] = useState(server.status ? true : false);

	const handleChange = async (event) => {
		const res = await fetch(`http://localhost:1000/servers/${server.id}/${server.status ? 0 : 1}`, { method: "put" })
		const data = await res.json()
		console.log(data)
		setUpdate(prev => !prev)
		setChecked(!event.target.checked);
	};

	return (
		<Card sx={{ margin: "10px", borderRadius: "15px" }}>
			<CardContent>
				<h4><span className="blue">ID: </span>{server.id}</h4>
				<h4><span className="blue">NAME: </span>{server.server}</h4>
				<h3><span className="blue">IP: </span>{server.ip}</h3>
			</CardContent>
			<CardActions>
				<Switch checked={checked} onChange={handleChange} />
			</CardActions>
		</Card>
	)
}