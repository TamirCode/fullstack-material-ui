import { useEffect, useState } from "react"
import ServerCard from "./ServerCard";

export default function List({update, setUpdate, checked}) {
	const [serversArr, setServersArr] = useState([])
	useEffect(() => {
		(async () => {
			let res;
			if (checked) {
				res = await fetch("http://localhost:1000/activeservers")
			} else {
				res = await fetch("http://localhost:1000/servers")
			}
			const data = await res.json()
			setServersArr(data)
			console.log(data)
		})()

	}, [update])
	
	
	return (
		<div className="List">
			{
				serversArr.map(server => <ServerCard key={server.id} server={server} setUpdate={setUpdate} />)
			}
		</div>
	)
}