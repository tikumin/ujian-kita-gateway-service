
const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const loginServiceRoute =  require('./routes/loginServiceRoute')
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use('/api/user', loginServiceRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})