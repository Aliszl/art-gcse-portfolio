require('dotenv').config()

const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

// require("dotenv").config()

//specify a folder for static assets, like images, css, index.hyml, js ....
//we need an endpoint on "/" to send index.html
// const path = require("path")

// const express = require('express')
// const cors = require('cors')
// const app = express()

// app.use(express.json())
// app.use(cors())
// app.use(express.static(path.join(__dirname, 'client/build')))

// const PORT = process.env.PORT || 8000
 
 
// app.get('/api', (req, res) => {
//  res.json({ message: 'The api is UP' })
// })

// fallback endpoint that will just send back index.html with the CRA.  Needs to be last route.  probably in server.js usually
// app.get("*", (req, res) => {
//     // send back the index.html contained inside client/build
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
//   })

// app.listen(PORT, () => {
//  console.log(`Listening on port ${PORT}`);
// })
