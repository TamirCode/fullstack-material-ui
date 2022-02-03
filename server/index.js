const exp = require("express")
const cors = require("cors")
const SQL = require("./dbconfig")

const app = exp()

app.use(exp.json())
app.use(cors())


// http://localhost:1000/servers
app.get("/servers", async (req, res) => {
    try {
        const servers = await SQL(`
            SELECT servers.*, companies.*
            FROM servers 
			INNER JOIN companies
            ON servers.company_id = companies.id
        `)
        console.table(servers)
        res.send(servers)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

// http://localhost:1000/activeservers
app.get("/activeservers", async (req, res) => {
    try {
        const activeservers = await SQL(`
            SELECT servers.*, companies.*
            FROM servers 
			INNER JOIN companies
            ON servers.company_id = companies.id
			WHERE servers.status = 1
        `)
        console.table(activeservers)
        res.send(activeservers)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

// fetch("http://localhost:1000/servers/2/1", {method: "put"})
app.put("/servers/:serverid/:status", async (req, res) => {
    const { serverid, status } = req.params
    
    if (!serverid || !status) {
        return res.status(400).send({err: "Missing info, servers/:serverid/:status"})
    }

    try {
        await SQL(`
			UPDATE servers
			SET status = ${status}
			WHERE id = ${serverid};
        `)
        res.send({msg: "success"})

    } catch (err) {
        console.log(err)
        res.status(500).send({err: "something went wrong"})
    }
})


app.listen(1000,  () => console.log("http://localhost:1000"))