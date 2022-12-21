const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
app.use(express.json());

dotenv.config({ path: './config.env' })
require('./db/conn')
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '/client/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(_dirname, '/client/build/index.html'))
);

app.listen(process.envPORT || PORT, () => {
    console.log(`server is running on ${PORT}`);
})