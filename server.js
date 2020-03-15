const PORT = 9001;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routerAuth = require('./routers/routerAuth');
const routerEmployees = require('./routers/routerEmployees');
app.use('/auth', routerAuth);
app.use('/employees', routerEmployees);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));