



const express = require('express');
const app = express();
const db = require('./database');

const bodyParser=require('body-parser');
const database = require('./database');
app.use(bodyParser.json()); //data will be stored in request.body

app.get('/', (req, res) => {
    res.send('<h1>Heyyyy monikaaaa kumariiiiii</h1>');
});

const personRoutes=require('./Router/personroute')
app.use('/person',personRoutes);


const menuRoutes=require('./Router/menuroute')
app.use('/menus',menuRoutes);

app.listen(7000, () => {
    console.log("Server is listening on port 7000");
});







//Client--->Server---->Database
//Client(customer) Waiter(server)  Database(chef)
//Client--->Backend sever(Node.js,Express.js)--->Database server(MongoDB)