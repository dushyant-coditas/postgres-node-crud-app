const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      db = require('./app/models'),
      routes = require('./app/routes/routes'),
      app = express();
    
let corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

//use header of content-type - application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;

db.sequelize.sync();

app.get('/', (req, res)=>{
    res.json('Welcome to Naruto characters Info');
});

routes(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


