const PORT = 3001;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(async (req, res) => res.send('Hello world'));
// app.use(express.static(path.join(__dirname, '../public')));

const routerV1 = require('./routers/routerV1');
app.use('/v1', routerV1);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));