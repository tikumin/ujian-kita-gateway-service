
const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const loadBalancerMiddleware = require('./middlewares/loadBalancer')
const loginServiceRoute =  require('./routes/loginServiceRoute');
const soalServiceRoute = require('./routes/soalServiceRoute');
const modulServiceRoute = require('./routes/modulServiceRoute');

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Gunakan loadBalancerMiddleware untuk semua permintaan di '/api'
app.use('/api', loadBalancerMiddleware);

app.use('/api/user', loginServiceRoute);
app.use('/api/soal', soalServiceRoute);
app.use('/api/modul', modulServiceRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})